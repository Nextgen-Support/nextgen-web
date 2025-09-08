const ServiceRequest = require('../models/serviceRequest');

// @desc    Create a new service request
// @route   POST /api/service-requests
// @access  Public
const createServiceRequest = async (req, res) => {
  try {
    const { name, email, phone, isCustomer, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !isCustomer || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }

    // Optional: Verify reCAPTCHA if enabled
    if (process.env.RECAPTCHA_SECRET_KEY) {
      const recaptchaResponse = await verifyRecaptcha(req.body.recaptchaToken);
      if (!recaptchaResponse.success) {
        return res.status(400).json({ 
          success: false, 
          message: 'reCAPTCHA verification failed'  
        });
      }
    }

    const serviceRequest = {
      name,
      email,
      phone: phone || null,
      isCustomer,
      subject,
      message
    };

    const requestId = await ServiceRequest.create(serviceRequest);
    
    res.status(201).json({
      success: true,
      message: 'Service request submitted successfully',
      data: { id: requestId }
    });
  } catch (error) {
    console.error('Error creating service request:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Helper function to verify reCAPTCHA
async function verifyRecaptcha(token) {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    return await response.json();
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return { success: false };
  }
}

// @desc    Get all service requests (admin only)
// @route   GET /api/service-requests
// @access  Private/Admin
const getServiceRequests = async (req, res) => {
  try {
    const requests = await ServiceRequest.findAll();
    res.json({ success: true, data: requests });
  } catch (error) {
    console.error('Error fetching service requests:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// @desc    Get single service request (admin only)
// @route   GET /api/service-requests/:id
// @access  Private/Admin
const getServiceRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ 
        success: false, 
        message: 'Service request not found' 
      });
    }
    res.json({ success: true, data: request });
  } catch (error) {
    console.error('Error fetching service request:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

// @desc    Update service request status (admin only)
// @route   PUT /api/service-requests/:id/status
// @access  Private/Admin
const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['new', 'in_progress', 'resolved', 'closed'].includes(status)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid status value' 
      });
    }

    const updated = await ServiceRequest.updateStatus(req.params.id, status);
    if (!updated) {
      return res.status(404).json({ 
        success: false, 
        message: 'Service request not found' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Status updated successfully' 
    });
  } catch (error) {
    console.error('Error updating service request status:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

module.exports = {
  createServiceRequest,
  getServiceRequests,
  getServiceRequest,
  updateRequestStatus
};
