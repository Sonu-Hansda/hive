import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 lg:px-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy for Hive</h1>
          <p className="mt-3 text-sm text-gray-600">Effective Date: 14 April 2026</p>
        </div>

        <div className="space-y-8 text-[15px] leading-7 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">1. Overview</h2>
            <p className="mt-3">
              Hive (“we”, “our”, or “us”) respects your privacy and is committed to protecting it.
              This Privacy Policy explains how Hive handles information when you use our mobile
              application.
            </p>
            <p className="mt-3">
              Hive is a storage management application designed to help users remove duplicate and
              similar images and compress videos to save storage space. Hive is built with a
              privacy-first approach, and all processing happens locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">2. Information We Collect</h2>
            <p className="mt-3 font-medium text-gray-900">
              We do not collect any personal data.
            </p>
            <div className="mt-3 space-y-2">
              <p>- No name, email address, phone number, or identity information is collected.</p>
              <p>- No login or account creation is required.</p>
              <p>- No personal files, including photos or videos, are uploaded to our servers.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">3. How Your Data Is Used</h2>
            <p className="mt-3">
              All operations performed by Hive happen entirely on your device. This includes:
            </p>
            <div className="mt-3 space-y-2">
              <p>- Scanning photos and videos</p>
              <p>- Detecting duplicate or similar files</p>
              <p>- Compressing videos</p>
            </div>
            <p className="mt-3">
              Your files never leave your device and are not transmitted to us or any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">4. Permissions</h2>
            <p className="mt-3">
              Hive may request access to photos and videos on your device. This permission is used
              only to:
            </p>
            <div className="mt-3 space-y-2">
              <p>- Analyze files locally</p>
              <p>- Allow you to manage and clean your storage</p>
            </div>
            <p className="mt-3">
              We do not use this permission to collect, store, or transmit your data externally.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">5. Data Storage and Security</h2>
            <div className="mt-3 space-y-2">
              <p>- All processing is done locally on your device.</p>
              <p>- We do not store or maintain user data on external servers.</p>
              <p>- Your files remain under your control at all times.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">6. Third-Party Services</h2>
            <p className="mt-3">
              Hive does not currently use third-party analytics, tracking, or data collection
              services.
            </p>
            <p className="mt-3">
              In the future, Hive may include payments and subscriptions. If that happens, payment
              processing may be handled by trusted platforms such as Google Play Billing. Those
              providers may collect information necessary to process payments in accordance with
              their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">7. Data Sharing</h2>
            <p className="mt-3">We do not sell, share, or transfer your data to third parties.</p>
            <p className="mt-3">
              Because we do not collect personal data, there is no personal data to share.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">8. Children’s Privacy</h2>
            <p className="mt-3">
              Hive does not knowingly collect any data from children. Since no personal data is
              collected at all, Hive is intended for general audiences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">9. Your Control</h2>
            <div className="mt-3 space-y-2">
              <p>- You can choose which files to delete.</p>
              <p>- You can uninstall the app at any time.</p>
              <p>- No data remains with us after uninstall because we do not collect or store it.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">10. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any changes will be reflected on
              this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">11. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, you can contact us at:
            </p>
            <p className="mt-3 font-medium text-gray-900">Email: balraksh.ceo@gmail.com</p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xl font-semibold text-gray-900">Summary</h2>
            <div className="mt-3 space-y-2">
              <p>- No personal data collected</p>
              <p>- No login required</p>
              <p>- All processing happens on-device</p>
              <p>- No files uploaded or shared</p>
            </div>
            <p className="mt-4">
              Hive is designed to keep your data private, secure, and fully under your control.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}