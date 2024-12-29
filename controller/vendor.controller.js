import VendorService from "../services/vendor.service.js";
export const createVendor = async (vendorData) => {
    try {
        const vendorData = req.body; 
        const newVendor = await vendorService.createVendor(vendorData);
        res.status(201).json({ message: 'Vendor created successfully', vendor: newVendor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
