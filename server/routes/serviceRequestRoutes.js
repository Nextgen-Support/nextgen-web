const express = require('express');
const router = express.Router();
const {
  createServiceRequest,
  getServiceRequests,
  getServiceRequest,
  updateRequestStatus
} = require('../controllers/serviceRequestController');

// Public routes
router.post('/', createServiceRequest);

// Protected routes (admin only)
// Note: In a production app, you would add authentication middleware here
// router.use(requireAuth);
// router.use(requireAdmin);

router.get('/', getServiceRequests);
router.get('/:id', getServiceRequest);
router.put('/:id/status', updateRequestStatus);

module.exports = router;
