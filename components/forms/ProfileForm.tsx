'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
type ProfilePageProps = {
  profile: any;  // replace 'any' with your actual type if possible
};
const VendorProfileForm = ({ profile }: ProfilePageProps) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      alternatePhone: '',
      businessAddress: '',
      currentPassword: '',
      newPassword: '',
      profileImage: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phone: Yup.string().matches(/^\d{10}$/, 'Must be a valid 10-digit number').required('Mobile number is required'),
      alternatePhone: Yup.string().matches(/^\d{10}$/, 'Must be a valid 10-digit number').notRequired(),
      businessAddress: Yup.string().required('Business address is required'),
      currentPassword: Yup.string(),
      newPassword: Yup.string().when('currentPassword', {
        is: (val) => val && val.length > 0,
        then: () => Yup.string().min(6, 'Password must be at least 6 characters').required('New password is required'),
        otherwise: () => Yup.string().notRequired(),
      }),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setStatus(null);
      await new Promise((r) => setTimeout(r, 1000));
      setStatus({ success: 'Profile updated successfully!' });
      setSubmitting(false);
    },
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue('profileImage', URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="absolute inset-0 bg-[url('/dj-illustration.png')] bg-cover bg-center opacity-20 z-0" />

      <div className="relative z-10 w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Vendor Profile</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="text-center">
            <label htmlFor="profileImage">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow border border-gray-300">
                {formik.values.profileImage ? (
                  <img src={formik.values.profileImage} alt="Profile" className="object-cover w-full h-full" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-100">Upload</div>
                )}
              </div>
              <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input id="name" name="name" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input id="phone" name="phone" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div>
            <label htmlFor="alternatePhone" className="block text-sm font-medium text-gray-700 mb-1">Alternate Number</label>
            <input id="alternatePhone" name="alternatePhone" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.alternatePhone} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div>
            <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
            <textarea id="businessAddress" name="businessAddress" rows={3} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.businessAddress} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input id="currentPassword" name="currentPassword" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.currentPassword} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input id="newPassword" name="newPassword" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.newPassword} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>

          <button type="submit" disabled={formik.isSubmitting} className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition disabled:opacity-50">
            {formik.isSubmitting ? 'Updating...' : 'Update Profile'}
          </button>

          {formik.status?.error && (
            <div className="text-sm text-red-600 mt-3 text-center">{formik.status.error}</div>
          )}
          {formik.status?.success && (
            <div className="text-sm text-green-600 mt-3 text-center">{formik.status.success}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default VendorProfileForm;
