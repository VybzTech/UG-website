import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import OptimizedImage from "@/components/ui/Optimizedimage";

const Landing = lazy(() => import("@/pages/landing/Landing"));

// Auth Pages
const Onboarding = lazy(() => import("@/pages/auth/Onboarding"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Signup = lazy(() => import("@/pages/auth/Signup"));
const VerifyOTP = lazy(() => import("@/pages/auth/VerifyOTP"));
const ChooseRole = lazy(() => import("@/pages/auth/ChooseRole"));
const BasicInfo = lazy(() => import("@/pages/auth/BasicInfo"));
const Preview = lazy(() => import("@/pages/auth/Preview"));

// Tenant Pages
// const TenantExplore = lazy(() => import("@/pages/tenant/Explore"));
// const TenantHomes = lazy(() => import("@/pages/tenant/Homes"));
// const TenantProfile = lazy(() => import("@/pages/tenant/Profile"));
// const PropertyDetail = lazy(() => import("@/pages/tenant/PropertyDetail"));
// const TenantPreferences = lazy(() => import("@/pages/tenant/Preferences"));
// const TenantMatches = lazy(() => import("@/pages/tenant/Matches"));
// const TenantPlans = lazy(() => import("@/pages/tenant/Plans"));
// const TenantChat = lazy(() => import("@/pages/tenant/Chat"));
// const LandlordProfileView = lazy(
//   () => import("@/pages/tenant/LandlordProfile"),
// );
// const TenantChangePassword = lazy(
//   () => import("@/pages/tenant/ChangePassword"),
// );
// const TenantSupport = lazy(() => import("@/pages/tenant/Support"));

// // Landlord Pages
// const LandlordExplore = lazy(() => import("@/pages/landlord/Explore"));
// const LandlordMatches = lazy(() => import("@/pages/landlord/Matches"));
// const LandlordListings = lazy(() => import("@/pages/landlord/Listings"));
// const LandlordProfile = lazy(() => import("@/pages/landlord/Profile"));
// const CreateListing = lazy(() => import("@/pages/landlord/CreateListing"));
// const ListingDetail = lazy(() => import("@/pages/landlord/ListingDetail"));
// const TenantProfileView = lazy(() => import("@/pages/landlord/TenantProfile"));
// const LandlordAnalytics = lazy(() => import("@/pages/landlord/Analytics"));
// const LandlordChat = lazy(() => import("@/pages/landlord/Chat"));
// const LandlordChangePassword = lazy(
//   () => import("@/pages/landlord/ChangePassword"),
// );
// const LandlordSupport = lazy(() => import("@/pages/landlord/Support"));

// // Officer Pages
// // const OfficerDashboard = lazy(() => import("@/pages/officer/OfficerDashboard"));
// const OfficerDashboard = lazy(() => import("@/pages/officer/Dashboard"));
// const OfficerLandlords = lazy(() => import("@/pages/officer/Landlords"));
// const OfficerTenants = lazy(() => import("@/pages/officer/Tenants"));
// const OfficerListings = lazy(() => import("@/pages/officer/Listings"));
// const OfficerSettings = lazy(() => import("@/pages/officer/Settings"));
// const OfficerLandlordDetail = lazy(
//   () => import("@/pages/officer/LandlordDetail"),
// );
// const OfficerTenantDetail = lazy(() => import("@/pages/officer/TenantDetail"));
// const OfficerListingDetail = lazy(
//   () => import("@/pages/officer/ListingDetail"),
// );
// const VerificationQueue = lazy(
//   () => import("@/pages/officer/VerificationQueue"),
// );
// const UpgradeRequests = lazy(() => import("@/pages/officer/UpgradeRequests"));
// const AuditTrail = lazy(() => import("@/pages/officer/AuditTrail"));
// const OfficerAnalytics = lazy(() => import("@/pages/officer/Analytics"));
// const OfficerNotifications = lazy(
//   () => import("@/pages/officer/Notifications"),
// );

// // Agent Pages
// const AgentExplore = lazy(() => import("@/pages/agent/Explore"));
// const AgentListings = lazy(() => import("@/pages/agent/Listings"));
// const AgentProfile = lazy(() => import("@/pages/agent/Profile"));

// // Settings
// const SettingsAccount = lazy(() => import("@/pages/settings/Account"));
// const SettingsSecurity = lazy(() => import("@/pages/settings/Security"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[100vh] w-screen">
      {/* <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" /> */}
      <OptimizedImage
        src="../src/assets/images/ug-logo.png"
        alt="ug-logo"
        width={100}
        height={100}
        priority={true}
        className="animate-pulse"
      />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/choose-role" element={<ChooseRole />} />
          <Route path="/basic-info" element={<BasicInfo />} />
          <Route path="/preview" element={<Preview />} />
        </Route>

        {/* App Routes - Protected */}
        {/* <Route element={<AppLayout />}>
          {/* Tenant /}
          <Route path="/tenant" element={<TenantExplore />} />
          <Route path="/tenant/homes" element={<TenantHomes />} />
          <Route path="/tenant/profile" element={<TenantProfile />} />
          <Route path="/tenant/property/:id" element={<PropertyDetail />} />
          <Route path="/tenant/preferences" element={<TenantPreferences />} />
          <Route path="/tenant/matches" element={<TenantMatches />} />
          <Route path="/tenant/plans" element={<TenantPlans />} />
          <Route path="/tenant/chat" element={<TenantChat />} />
          <Route
            path="/tenant/landlord/:id"
            element={<LandlordProfileView />}
          />
          <Route
            path="/tenant/change-password"
            element={<TenantChangePassword />}
          />
          <Route path="/tenant/support" element={<TenantSupport />} />

          {/* Landlord /}
          <Route path="/landlord" element={<LandlordExplore />} />
          <Route path="/landlord/matches" element={<LandlordMatches />} />
          <Route path="/landlord/listings" element={<LandlordListings />} />
          <Route path="/landlord/profile" element={<LandlordProfile />} />
          <Route path="/landlord/create-listing" element={<CreateListing />} />
          <Route path="/landlord/listing/:id" element={<ListingDetail />} />
          <Route path="/landlord/tenant/:id" element={<TenantProfileView />} />
          <Route path="/landlord/analytics" element={<LandlordAnalytics />} />
          <Route path="/landlord/chat" element={<LandlordChat />} />
          <Route
            path="/landlord/change-password"
            element={<LandlordChangePassword />}
          />
          <Route path="/landlord/support" element={<LandlordSupport />} />

          {/* Agent /}
          <Route path="/agent" element={<AgentExplore />} />
          <Route path="/agent/listings" element={<AgentListings />} />
          <Route path="/agent/profile" element={<AgentProfile />} />

          {/* Settings /}
          <Route path="/settings/account" element={<SettingsAccount />} />
          <Route path="/settings/security" element={<SettingsSecurity />} />
        </Route> */}

        {/* <Route element={<OfficerLayout />}>
          {/* Officer /}
          <Route path="/officer" element={<OfficerDashboard />} />
          <Route path="/officer/landlords" element={<OfficerLandlords />} />
          <Route path="/officer/tenants" element={<OfficerTenants />} />
          <Route path="/officer/listings" element={<OfficerListings />} />
          <Route path="/officer/settings" element={<OfficerSettings />} />
          <Route
            path="/officer/landlord/:id"
            element={<OfficerLandlordDetail />}
          />
          <Route path="/officer/tenant/:id" element={<OfficerTenantDetail />} />
          <Route
            path="/officer/listing/:id"
            element={<OfficerListingDetail />}
          />
          <Route
            path="/officer/verification-queue"
            element={<VerificationQueue />}
          />
          <Route
            path="/officer/upgrade-requests"
            element={<UpgradeRequests />}
          />
          <Route path="/officer/audit-trail" element={<AuditTrail />} />
          <Route path="/officer/analytics" element={<OfficerAnalytics />} />
          <Route
            path="/officer/notifications"
            element={<OfficerNotifications />}
          />
        </Route> */}

        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
