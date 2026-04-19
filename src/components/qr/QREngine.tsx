'use client';

import React, { useEffect, useRef, useState } from 'react';
import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Options
} from 'qr-code-styling';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';

type Extension = 'svg' | 'png' | 'jpeg' | 'webp' | 'pdf';

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export interface QRState {
  data: string;
  width: number;
  height: number;
  margin: number;
  dotsColor: string;
  dotsType: DotType;
  cornersSquareColor: string;
  cornersSquareType: CornerSquareType;
  cornersDotColor: string;
  cornersDotType: CornerDotType;
  backgroundGradient: boolean;
  backgroundColor: string;
  backgroundGradientColor: string;
  dotsGradient: boolean;
  dotsGradientColor: string;
  image?: string;
  labelText?: string;
  labelColor?: string;
}

interface QREngineProps {
  state: QRState;
}

export default function QREngine({ state }: QREngineProps) {
  const [qrCode] = useState<QRCodeStyling>(() => {
    if (typeof window !== 'undefined') {
      return new QRCodeStyling({
        width: 300,
        height: 300,
        type: 'svg',
        data: 'https://itsmyapp.co.uk',
        image: '',
        dotsOptions: {
          color: '#000000',
          type: 'rounded'
        },
        backgroundOptions: {
          color: '#ffffff',
        },
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 0,
          imageSize: 0.4,
          hideBackgroundDots: true
        }
      });
    }
    return null as any;
  });

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (qrCode && ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (qrCode) {
      const options: Partial<Options> = {
        data: state.data || ' ',
        width: state.width,
        height: state.height,
        margin: state.margin,
        dotsOptions: {
          type: state.dotsType,
          color: !state.dotsGradient ? state.dotsColor : undefined,
          gradient: state.dotsGradient ? {
            type: 'linear',
            colorStops: [
              { offset: 0, color: state.dotsColor },
              { offset: 1, color: state.dotsGradientColor }
            ]
          } : undefined
        },
        backgroundOptions: {
          color: !state.backgroundGradient ? state.backgroundColor : undefined,
          gradient: state.backgroundGradient ? {
            type: 'linear',
            colorStops: [
              { offset: 0, color: state.backgroundColor },
              { offset: 1, color: state.backgroundGradientColor }
            ]
          } : undefined
        },
        cornersSquareOptions: {
          type: state.cornersSquareType,
          color: state.cornersSquareColor
        },
        cornersDotOptions: {
          type: state.cornersDotType,
          color: state.cornersDotColor
        },
        image: state.image
      };
      qrCode.update(options);
    }
  }, [qrCode, state]);

  const onDownloadClick = async (extension: Extension) => {
    if (!qrCode || !containerRef.current) return;

    // The library handles PNG, SVG, etc. but not always PDF reliably or included with our label
    // If it's a standard format and NO label, use library's built-in download
    // Note: We cast extension to any because the library types might vary
    if (!state.labelText && extension !== 'pdf') {
      qrCode.download({ extension: extension as any });
      return;
    }

    // If there IS a label or it's a PDF, we use our custom capture logic
    try {
      // domtoimage is generally more robust for modern CSS than html2canvas
      const filter = (node: Node) => {
        // Exclude UI buttons if they somehow got in the ref, but here they are outside
        return true;
      };

      const dataUrl = await domtoimage.toPng(containerRef.current, {
        bgcolor: state.backgroundColor,
        quality: 1.0,
        height: containerRef.current.offsetHeight * 2,
        width: containerRef.current.offsetWidth * 2,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left'
        },
        filter
      });

      if (extension === 'png' || extension === 'jpeg' || extension === 'webp') {
        const link = document.createElement('a');
        link.download = `qrcode-${Date.now()}.${extension}`;
        link.href = dataUrl;
        link.click();
      } else if (extension === 'pdf') {
        const pdf = new jsPDF({
          orientation: containerRef.current.offsetWidth > containerRef.current.offsetHeight ? 'l' : 'p',
          unit: 'px',
          format: [containerRef.current.offsetWidth * 2, containerRef.current.offsetHeight * 2]
        });
        pdf.addImage(dataUrl, 'PNG', 0, 0, containerRef.current.offsetWidth * 2, containerRef.current.offsetHeight * 2);
        pdf.save(`qrcode-${Date.now()}.pdf`);
      } else if (extension === 'svg') {
        // For SVG, the library's own SVG is better quality, 
        // but it won't have the label. For now, fallback to library SVG.
        qrCode.download({ extension: 'svg' });
      }
    } catch (err) {
      console.error('Export failed:', err);
      // Final fallback to whatever the library can do
      if (extension !== 'pdf') {
        qrCode.download({ extension: extension as any });
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800">
      <div ref={containerRef} className="flex flex-col items-center gap-4 p-4" style={{ backgroundColor: state.backgroundColor }}>
        <div ref={ref} className="qr-container overflow-hidden rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-inner p-4 bg-white" />
        {state.labelText && (
          <div 
            className="text-center font-bold text-xl px-2 break-words max-w-[300px]"
            style={{ color: state.labelColor || (state.dotsGradient ? state.dotsColor : state.dotsColor) }}
          >
            {state.labelText}
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center w-full">
        <Button onClick={() => onDownloadClick('png')} className="flex-1 min-w-[80px]" variant="outline">
          <Download className="w-4 h-4 mr-2" /> PNG
        </Button>
        <Button onClick={() => onDownloadClick('svg')} className="flex-1 min-w-[80px]" variant="outline">
          <Download className="w-4 h-4 mr-2" /> SVG
        </Button>
        <Button onClick={() => onDownloadClick('pdf')} className="flex-1 min-w-[80px]" variant="outline">
          <Download className="w-4 h-4 mr-2" /> PDF
        </Button>
      </div>
    </div>
  );
}
