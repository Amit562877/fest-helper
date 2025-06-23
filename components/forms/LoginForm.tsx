'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setStatus(null);
      await new Promise((r) => setTimeout(r, 1500));
      setStatus({ success: 'Login successful!' });
      setSubmitting(false);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="absolute inset-0 bg-[url('/dj-illustration.png')] bg-cover bg-center opacity-20 z-0" />

      <div className="relative z-10 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Vendor Login</h2>
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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${formik.touched.password && formik.errors.password ? 'border-red-500 focus:ring-red-300' : 'focus:ring-purple-500'}`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-600 mt-1">{formik.errors.password}</p>
            )}
            <div className="text-right mt-2">
              <Link href="/auth/forgot-password" className="text-sm text-purple-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition disabled:opacity-50"
          >
            {formik.isSubmitting ? 'Logging in...' : 'Login'}
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

export default LoginForm;
