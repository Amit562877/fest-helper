'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      alternatePhone: '',
      businessAddress: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().matches(/^\d{10}$/, 'Must be a valid 10-digit number').required('Phone number is required'),
      alternatePhone: Yup.string().matches(/^\d{10}$/, 'Must be a valid 10-digit number').notRequired(),
      businessAddress: Yup.string().required('Business address is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm your password'),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setStatus(null);
      await new Promise((r) => setTimeout(r, 1500));
      setStatus({ success: 'Signup successful!' });
      setSubmitting(false);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="absolute inset-0 bg-[url('/dj-illustration.png')] bg-cover bg-center opacity-20 z-0" />

      <div className="relative z-10 w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Vendor Signup</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input id="name" name="name" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${formik.touched.name && formik.errors.name ? 'border-red-500 focus:ring-red-300' : 'focus:ring-purple-500'}`} />
            {formik.touched.name && formik.errors.name && (<p className="text-sm text-red-600 mt-1">{formik.errors.name}</p>)}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email ? 'border-red-500 focus:ring-red-300' : 'focus:ring-purple-500'}`} />
            {formik.touched.email && formik.errors.email && (<p className="text-sm text-red-600 mt-1">{formik.errors.email}</p>)}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input id="phone" name="phone" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${formik.touched.phone && formik.errors.phone ? 'border-red-500 focus:ring-red-300' : 'focus:ring-purple-500'}`} />
            {formik.touched.phone && formik.errors.phone && (<p className="text-sm text-red-600 mt-1">{formik.errors.phone}</p>)}
          </div>
          <div>
            <label htmlFor="alternatePhone" className="block text-sm font-medium text-gray-700 mb-1">Alternate Number (optional)</label>
            <input id="alternatePhone" name="alternatePhone" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.alternatePhone} className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${formik.touched.alternatePhone && formik.errors.alternatePhone ? 'border-red-500 focus:ring-red-300' : 'focus:ring-purple-500'}`} />
            {formik.touched.alternatePhone && formik.errors.alternatePhone && (<p className="text-sm text-red-600 mt-1">{formik.errors.alternatePhone}</p>)}
          </div>
          <div>
            <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
            <textarea id="businessAddress" name="businessAddress" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.businessAddress} rows={3} className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${formik.touched.businessAddress && formik.errors.businessAddress ? 'border-red-500 focus:ring-red-300' : 'focus:ring-purple-500'}`} />
            {formik.touched.businessAddress && formik.errors.businessAddress && (<p className="text-sm text-red-600 mt-1">{formik.errors.businessAddress}</p>)}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input id="password" name="password" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${formik.touched.password && formik.errors.password ? 'border-red-500 focus:ring-red-300' : 'focus:ring-purple-500'}`} />
            {formik.touched.password && formik.errors.password && (<p className="text-sm text-red-600 mt-1">{formik.errors.password}</p>)}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500 focus:ring-red-300' : 'focus:ring-purple-500'}`} />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (<p className="text-sm text-red-600 mt-1">{formik.errors.confirmPassword}</p>)}
          </div>
          <button type="submit" disabled={formik.isSubmitting} className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition disabled:opacity-50">
            {formik.isSubmitting ? 'Signing up...' : 'Sign up'}
          </button>
          {formik.status?.error && (<div className="text-sm text-red-600 mt-3 text-center">{formik.status.error}</div>)}
          {formik.status?.success && (<div className="text-sm text-green-600 mt-3 text-center">{formik.status.success}</div>)}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
