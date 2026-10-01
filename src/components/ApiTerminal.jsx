import React, { useState } from 'react';
import { Terminal, Play, Copy, Check, Server, RefreshCw, Code2, Sparkles, Shield, Cpu } from 'lucide-react';
import { apiDemoData } from '../data/portfolioData';

export default function ApiTerminal() {
  const [activeTab, setActiveTab] = useState('json');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [queryBoostParam, setQueryBoostParam] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(apiDemoData.response, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReRun = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  return (
    <section id="api-terminal" className="py-24 relative overflow-hidden bg-[#071521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1D2A] border border-[#FF6B57]/30 text-xs font-semibold text-[#FF6B57] uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive REST API Sandbox</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F7FA]">
            Live .NET Core Web API <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] via-[#FF8A65] to-[#FFB199]">
              Simulator & Response Payload
            </span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#A9B3C1]">
            Experience Shaik Janu's API design standards firsthand. Execute a live simulated REST request against backend endpoints.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden glass-panel border border-[#FF6B57]/25 shadow-2xl">
          
          {/* Window Header */}
          <div className="px-6 py-4 bg-[#0B1D2A] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-3 font-mono text-xs text-[#A9B3C1] font-semibold flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-[#FF6B57]" /> ASP.NET Core 8.0 Controller Endpoint
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReRun}
                disabled={loading}
                className="p-1.5 rounded-lg bg-[#0E1621] text-[#A9B3C1] hover:text-[#FF6B57] border border-white/5 transition-all text-xs font-mono flex items-center gap-1"
                title="Execute Request Again"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#FF6B57]' : ''}`} />
                <span className="hidden sm:inline">Send GET</span>
              </button>

              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-[#0E1621] text-[#A9B3C1] hover:text-[#FF6B57] border border-white/5 transition-all text-xs font-mono flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>
          </div>

          {/* URL Bar & Parameters */}
          <div className="px-6 py-3 bg-[#071521] border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 bg-[#0E1621] px-3 py-1.5 rounded-lg border border-white/10 flex-1">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[11px]">
                GET
              </span>
              <span className="text-[#F5F7FA] font-medium truncate">
                https://api.shaikjanu.dev/v1/developer/profile
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {apiDemoData.statusText}
              </span>
            </div>
          </div>

          {/* Response Tabs Header */}
          <div className="px-6 bg-[#0B1D2A] border-b border-white/5 flex items-center gap-4 text-xs font-mono">
            <button
              onClick={() => setActiveTab('json')}
              className={`py-3 border-b-2 font-semibold transition-all ${
                activeTab === 'json'
                  ? 'border-[#FF6B57] text-[#FF6B57]'
                  : 'border-transparent text-[#A9B3C1] hover:text-[#F5F7FA]'
              }`}
            >
              Response Body (JSON)
            </button>
            <button
              onClick={() => setActiveTab('headers')}
              className={`py-3 border-b-2 font-semibold transition-all ${
                activeTab === 'headers'
                  ? 'border-[#FF6B57] text-[#FF6B57]'
                  : 'border-transparent text-[#A9B3C1] hover:text-[#F5F7FA]'
              }`}
            >
              Headers ({Object.keys(apiDemoData.headers).length})
            </button>
          </div>

          {/* Code Viewer Body */}
          <div className="p-6 bg-[#071521] font-code text-xs leading-relaxed overflow-x-auto min-h-[320px]">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-16 space-y-3">
                <RefreshCw className="w-8 h-8 text-[#FF6B57] animate-spin" />
                <span className="text-xs text-[#A9B3C1] font-mono">Compiling ASP.NET Core response...</span>
              </div>
            ) : activeTab === 'json' ? (
              <pre className="text-[#F5F7FA]">
                <code>
                  {JSON.stringify(apiDemoData.response, null, 2)}
                </code>
              </pre>
            ) : (
              <div className="space-y-2">
                {Object.entries(apiDemoData.headers).map(([key, val]) => (
                  <div key={key} className="flex items-center gap-3">
                    <span className="text-[#FF6B57] font-semibold">{key}:</span>
                    <span className="text-[#A9B3C1]">{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3 bg-[#0B1D2A] border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-[#A9B3C1]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[#FFB199]">
                <Shield className="w-3.5 h-3.5 text-[#FF6B57]" /> Bearer JWT Authorization
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Cpu className="w-3.5 h-3.5" /> 20% Performance Optimized
              </span>
            </div>

            <span>Shaik Janu ASP.NET Core Middleware</span>
          </div>

        </div>

      </div>
    </section>
  );
}
