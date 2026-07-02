import React, { Component } from 'react';
import { AlertTriangle, Home, RotateCcw, Phone } from 'lucide-react';
import { buttons } from '../design-system/buttons';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an analytics service or system console
    console.error('[ErrorBoundary caught an error]', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans p-6">
          <div className="bg-white border border-slate-100 max-w-md w-full p-8 rounded-3xl shadow-sm text-center space-y-6">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle size={32} />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold font-display text-slate-900">
                Application Error
              </h1>
              <p className="text-slate-500 text-sm leading-relaxed">
                An unexpected error occurred while rendering this page. Our team has been notified.
              </p>
            </div>

            {/* Recovery actions */}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={this.handleReset}
                className={`${buttons.primary} py-3 text-sm w-full flex items-center justify-center gap-1.5 cursor-pointer`}
              >
                <RotateCcw size={16} />
                Reset & Go Home
              </button>
              
              <a
                href="tel:+919000000001"
                className={`${buttons.secondary} py-3 text-sm w-full flex items-center justify-center gap-1.5 cursor-pointer`}
              >
                <Phone size={16} className="text-sky-600" />
                Contact Helpdesk
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
