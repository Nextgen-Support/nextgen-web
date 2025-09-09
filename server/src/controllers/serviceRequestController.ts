import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import * as serviceRequestModel from '../models/ServiceRequest';
import { sendServiceRequestNotification } from '../services/emailService';

export const createServiceRequest = async (req: Request, res: Response) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors: errors.array() 
      });
    }

    const { name, email, phone, subject, message } = req.body;
    
    // Create service request
    const newRequest = await serviceRequestModel.createServiceRequest({
      name,
      email,
      phone,
      subject,
      message
    });

    // Send email notification (fire and forget)
    if (process.env.ADMIN_EMAIL) {
      sendServiceRequestNotification(process.env.ADMIN_EMAIL, {
        name,
        email,
        subject,
        message
      }).catch(console.error);
    }

    // Return success response
    return res.status(201).json({
      success: true,
      message: 'Service request created successfully',
      data: {
        id: newRequest.id,
        name: newRequest.name,
        email: newRequest.email,
        status: newRequest.status,
        created_at: newRequest.created_at
      }
    });
  } catch (error: unknown) {
    console.error('Error creating service request:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    });
  }
};

export const getServiceRequest = async (req: Request, res: Response) => {
  try {
    const requestId = parseInt(req.params.id);
    if (isNaN(requestId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid request ID'
      });
    }

    const serviceRequest = await serviceRequestModel.getServiceRequestById(requestId);
    
    if (!serviceRequest) {
      return res.status(404).json({
        success: false,
        message: 'Service request not found'
      });
    }

    return res.json({
      success: true,
      data: serviceRequest
    });
  } catch (error) {
    console.error('Error fetching service request:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

export const getAllServiceRequests = async (req: Request, res: Response) => {
  try {
    const requests = await serviceRequestModel.getAllServiceRequests();
    return res.json({
      success: true,
      data: requests
    });
  } catch (error) {
    console.error('Error fetching service requests:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};
