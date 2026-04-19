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

  const onDownloadClick = (extension: any) => {
    if (qrCode) {
      qrCode.download({
        extension: extension
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800">
      <div ref={ref} className="qr-container overflow-hidden rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-inner p-4 bg-white" />
      
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
