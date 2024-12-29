import { Vendor } from '../models/vendor.js';

export const createVendor = async (vendorData) => {
  try {
    const newVendor = new Vendor(vendorData);
    await newVendor.save();
    return newVendor;
  } catch (error) {
    throw new Error('Error creating vendor: ' + error.message);
  }
};
