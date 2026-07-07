import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Upload, Film, Play, Loader2, AlertTriangle, CheckCircle, Smartphone, Monitor } from 'lucide-react';

const VideoGenView: React.FC = () => {
  const [hasKey, setHasKey] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('Cinematic movement, high quality, photorealistic, 4k');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkKey();
  }, []);

  const checkKey = async () => {
    const aistudio = (window as any).aistudio;
    if (aistudio) {
      const has = await aistudio.hasSelectedApiKey();
      setHasKey(has);
    }
  };

  const handleKeySelect = async () => {
    const aistudio = (window as any).aistudio;
    if (aistudio) {
      await aistudio.openSelectKey();
      // Assume success to mitigate race condition as per guidelines
      setHasKey(true);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    setVideoUrl(null);
    setStatus('Initializing Veo-3.1 model...');

    try {
      // Initialize fresh instance with key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const base64Data = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];

      setStatus('Uploading visual cortex data...');
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        image: {
          imageBytes: base64Data,
          mimeType: mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      setStatus('Dreaming up temporal sequences (approx. 1 min)...');
      
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({operation: operation});
        setStatus('Polishing pixels...');
      }

      if (operation.response?.generatedVideos?.[0]?.video?.uri) {
         const downloadLink = operation.response.generatedVideos[0].video.uri;
         const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
         const videoBlob = await videoResponse.blob();
         const localUrl = URL.createObjectURL(videoBlob);
         setVideoUrl(localUrl);
      } else {
        throw new Error("No video URI returned from the model.");
      }

    } catch (err: any) {
      console.error(err);
      if (err.message && err.message.includes("Requested entity was not found")) {
         setHasKey(false);
         setError("API Key invalid or session expired. Please select a key again.");
      } else {
         setError(err.message || "Failed to generate video.");
      }
    } finally {
      setLoading(false);
      setStatus('');
    }
  };

  return (
    <div className="h-full flex flex-col p-6 gap-6 max-w-5xl mx-auto w-full overflow-y-auto">
      <div className="flex flex-col gap-2 shrink-0">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Film className="text-cyan-400" /> Veo Neural Animation
        </h2>
        <p className="text-slate-400">Transform static memories into motion using the Veo-3.1 foundation model.</p>
      </div>

      {!hasKey ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="bg-slate-900/50 border border-yellow-500/30 p-8 rounded-xl flex flex-col items-center justify-center gap-4 text-center max-w-lg">
            <AlertTriangle className="w-12 h-12 text-yellow-500" />
            <div>
                <h3 className="text-lg font-bold text-white">Billing Account Required</h3>
                <p className="text-slate-400 mt-2">
                Veo video generation requires a paid Google Cloud Project API key. 
                Please select a valid key to proceed.
                </p>
            </div>
            <button 
                onClick={handleKeySelect}
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg transition flex items-center gap-2"
            >
                Select API Key
            </button>
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="text-xs text-slate-500 underline hover:text-slate-300">
                View Billing Documentation
            </a>
            </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 pb-6">
          {/* Configuration Panel */}
          <div className="flex-1 space-y-6">
            
            {/* Image Upload */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">1. Source Image</label>
                <div className={`border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-4 transition-colors min-h-[200px] relative group ${image ? 'border-cyan-500/50 bg-cyan-950/10' : 'border-slate-700 hover:border-slate-500 bg-slate-900/50'}`}>
                    {image ? (
                       <div className="relative w-full h-full flex items-center justify-center">
                          <img src={image} alt="Source" className="max-h-[300px] w-auto object-contain rounded-lg shadow-lg" />
                          <button 
                            onClick={() => setImage(null)}
                            className="absolute top-2 right-2 p-2 bg-black/70 hover:bg-black rounded-full text-white transition"
                          >
                             ✕
                          </button>
                       </div>
                    ) : (
                        <>
                          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                             <Upload className="w-8 h-8 text-slate-400" />
                          </div>
                          <div className="text-center">
                              <p className="text-slate-300 font-medium">Click or drag to upload photo</p>
                              <p className="text-xs text-slate-500 mt-1">JPG, PNG supported</p>
                          </div>
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            disabled={loading}
                          />
                        </>
                    )}
                </div>
            </div>

            {/* Settings */}
            <div className="space-y-4 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                 <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">2. Configuration</label>
                 
                 <div className="space-y-3">
                    <span className="text-xs text-slate-500 font-bold block">ASPECT RATIO</span>
                    <div className="flex gap-3">
                        <button 
                          onClick={() => setAspectRatio('16:9')}
                          disabled={loading}
                          className={`flex-1 py-3 rounded-lg border flex items-center justify-center gap-2 transition-all ${aspectRatio === '16:9' ? 'bg-cyan-900/30 border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]' : 'bg-slate-950 border-slate-700 text-slate-400 hover:bg-slate-800'}`}
                        >
                            <Monitor className="w-4 h-4" /> Landscape
                        </button>
                        <button 
                          onClick={() => setAspectRatio('9:16')}
                          disabled={loading}
                          className={`flex-1 py-3 rounded-lg border flex items-center justify-center gap-2 transition-all ${aspectRatio === '9:16' ? 'bg-cyan-900/30 border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]' : 'bg-slate-950 border-slate-700 text-slate-400 hover:bg-slate-800'}`}
                        >
                            <Smartphone className="w-4 h-4" /> Portrait
                        </button>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <span className="text-xs text-slate-500 font-bold block">MOTION PROMPT</span>
                    <textarea 
                       className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 text-sm focus:border-cyan-500 focus:outline-none resize-none placeholder-slate-600"
                       rows={3}
                       value={prompt}
                       onChange={(e) => setPrompt(e.target.value)}
                       disabled={loading}
                       placeholder="Describe how the image should move (e.g., 'The camera pans slowly to the right', 'Water flowing in the river')..."
                    />
                 </div>
            </div>

            <button
                onClick={generateVideo}
                disabled={!image || loading}
                className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${!image || loading ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-900/50 hover:shadow-cyan-900/80 hover:-translate-y-0.5'}`}
            >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
                {loading ? 'Generating Video...' : 'Generate Video'}
            </button>

            {error && (
                <div className="p-4 bg-red-950/30 border border-red-900/50 rounded-lg text-red-400 text-sm flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    {error}
                </div>
            )}

          </div>

          {/* Output Panel */}
          <div className="flex-1 bg-black/40 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center relative min-h-[400px]">
              {loading ? (
                 <div className="text-center space-y-6 animate-in fade-in duration-500">
                     <div className="relative w-24 h-24 mx-auto">
                         <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
                         <div className="absolute inset-0 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div>
                         <Film className="absolute inset-0 m-auto text-slate-700 w-8 h-8" />
                     </div>
                     <div>
                        <p className="text-cyan-400 font-bold animate-pulse text-lg">{status}</p>
                        <p className="text-xs text-slate-500 max-w-xs mx-auto mt-2">This process requires significant compute. Average wait time is 1-2 minutes.</p>
                     </div>
                 </div>
              ) : videoUrl ? (
                 <div className="w-full h-full flex flex-col gap-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-full flex-1 rounded-lg overflow-hidden border border-slate-700 bg-black shadow-2xl relative group">
                        <video 
                            src={videoUrl} 
                            controls 
                            autoPlay 
                            loop 
                            className="w-full h-full object-contain max-h-[60vh]"
                        />
                    </div>
                    <div className="flex items-center justify-between text-green-400 text-sm bg-green-950/20 border border-green-900/50 p-4 rounded-lg">
                        <span className="flex items-center gap-2 font-bold"><CheckCircle className="w-5 h-5" /> Generation Complete</span>
                        <a href={videoUrl} download="veo_generation.mp4" className="px-4 py-2 bg-green-900/30 hover:bg-green-900/50 border border-green-700 rounded transition text-green-300">
                            Download MP4
                        </a>
                    </div>
                 </div>
              ) : (
                 <div className="text-center text-slate-600 space-y-4">
                     <div className="w-20 h-20 bg-slate-900/50 rounded-full flex items-center justify-center mx-auto border border-slate-800">
                        <Film className="w-10 h-10 opacity-50" />
                     </div>
                     <div>
                        <p className="font-medium text-slate-500">Video Output</p>
                        <p className="text-sm text-slate-700">Generated content will appear here</p>
                     </div>
                 </div>
              )}
          </div>

        </div>
      )}
    </div>
  );
}

export default VideoGenView;