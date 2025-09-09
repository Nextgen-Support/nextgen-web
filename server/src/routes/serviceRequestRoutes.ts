import { Router } from 'express';
import * as serviceRequestController from '../controllers/serviceRequestController';
import { validateServiceRequest } from '../middleware/validation';

const router = Router();

/**
 * @route   POST /api/service-requests
 * @desc    Create a new service request
 * @access  Public
 */
router.post('/', validateServiceRequest(), serviceRequestController.createServiceRequest);

/**
 * @route   GET /api/service-requests/:id
 * @desc    Get a service request by ID
 * @access  Public (in production, consider adding authentication)
 */
router.get('/:id', serviceRequestController.getServiceRequest);

/**
 * @route   GET /api/service-requests
 * @desc    Get all service requests
 * @access  Public (in production, this should be protected and admin-only)
 */
router.get('/', serviceRequestController.getAllServiceRequests);

export { router as serviceRequestRouter };
