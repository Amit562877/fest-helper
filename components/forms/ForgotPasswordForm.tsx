'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ForgotPasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setStatus(null);
      await new Promise((r) => setTimeout(r, 1500));
      setStatus({ success: 'Reset link sent to your email!' });
      setSubmitting(false);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="absolute inset-0 bg-[url('/dj-illustration.png')] bg-cover bg-center opacity-20 z-0" />

      <div className="relative z-10 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Forgot Password</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email ? 'border-red-500 focus:ring-red-300' : 'focus:ring-purple-500'}`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-600 mt-1">{formik.errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition disabled:opacity-50"
          >
            {formik.isSubmitting ? 'Sending link...' : 'Send Reset Link'}
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

export default ForgotPasswordForm;
