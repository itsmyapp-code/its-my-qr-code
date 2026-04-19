'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import QREngine, { QRState } from './QREngine';
import { Link2, Type, Mail, Wifi, CreditCard, Palette, Shapes, Image as ImageIcon, Type as TypeIcon } from "lucide-react";

export default function QRDashboard() {
  const [qrState, setQrState] = useState<QRState>({
    data: 'https://itsmyapp.co.uk',
    width: 300,
    height: 300,
    margin: 10,
    dotsColor: '#000000',
    dotsType: 'rounded' as any,
    cornersSquareColor: '#000000',
    cornersSquareType: 'extra-rounded' as any,
    cornersDotColor: '#000000',
    cornersDotType: 'dot' as any,
    backgroundGradient: false,
    backgroundColor: '#ffffff',
    backgroundGradientColor: '#f0f0f0',
    dotsGradient: false,
    dotsGradientColor: '#333333',
    image: undefined,
    labelText: '',
    labelColor: '#000000'
  });

  const updateState = (updates: Partial<QRState>) => {
    setQrState(prev => ({ ...prev, ...updates }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateState({ image: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Input & Customization */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        <Tabs defaultValue="url" className="w-full">
          <TabsList className="grid grid-cols-5 h-auto p-1 bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-6">
            <TabsTrigger value="url" className="flex flex-col gap-1 py-3 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 shadow-none">
              <Link2 className="w-5 h-5" />
              <span className="text-xs">URL</span>
            </TabsTrigger>
            <TabsTrigger value="text" className="flex flex-col gap-1 py-3 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 shadow-none">
              <Type className="w-5 h-5" />
              <span className="text-xs">Text</span>
            </TabsTrigger>
            <TabsTrigger value="email" className="flex flex-col gap-1 py-3 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 shadow-none">
              <Mail className="w-5 h-5" />
              <span className="text-xs">Email</span>
            </TabsTrigger>
            <TabsTrigger value="wifi" className="flex flex-col gap-1 py-3 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 shadow-none">
              <Wifi className="w-5 h-5" />
              <span className="text-xs">WiFi</span>
            </TabsTrigger>
            <TabsTrigger value="vcard" className="flex flex-col gap-1 py-3 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 shadow-none">
              <CreditCard className="w-5 h-5" />
              <span className="text-xs">vCard</span>
            </TabsTrigger>
          </TabsList>

          <Card className="rounded-3xl border-none shadow-sm bg-white dark:bg-zinc-900 overflow-hidden">
            <CardHeader className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
              <CardTitle className="text-xl">Information</CardTitle>
              <CardDescription>Enter the content for your QR code.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <TabsContent value="url" className="m-0 focus-visible:ring-0">
                <div className="space-y-4">
                  <Label htmlFor="url">Your URL</Label>
                  <Input 
                    id="url" 
                    placeholder="https://example.com" 
                    value={qrState.data}
                    onChange={(e) => updateState({ data: e.target.value })}
                    className="rounded-xl h-12 border-zinc-200 dark:border-zinc-800 focus:ring-zinc-400"
                  />
                </div>
              </TabsContent>

              <TabsContent value="text" className="m-0">
                <div className="space-y-4">
                  <Label htmlFor="text">Your Text</Label>
                  <textarea 
                    id="text" 
                    placeholder="Enter message here..." 
                    value={qrState.data}
                    onChange={(e) => updateState({ data: e.target.value })}
                    className="w-full min-h-[120px] p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-zinc-400 outline-none transition-all"
                  />
                </div>
              </TabsContent>

              <TabsContent value="email" className="m-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-to">Recipient Email</Label>
                      <Input id="email-to" placeholder="hello@example.com" onChange={(e) => {
                        const emailData = `mailto:${e.target.value}`;
                        updateState({ data: emailData });
                      }} className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-subject">Subject</Label>
                      <Input id="email-subject" placeholder="Greetings!" className="rounded-xl h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-body">Message</Label>
                    <textarea id="email-body" className="w-full min-h-[100px] p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-zinc-400 outline-none" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="wifi" className="m-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="wifi-ssid">Network Name (SSID)</Label>
                      <Input id="wifi-ssid" placeholder="My WiFi" onChange={(e) => {
                        // Simplified WiFi data for prototype
                        updateState({ data: `WIFI:S:${e.target.value};T:WPA;P:password;;` });
                      }} className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="wifi-pass">Password</Label>
                      <Input id="wifi-pass" type="password" placeholder="********" className="rounded-xl h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Encryption</Label>
                    <Select defaultValue="WPA">
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="WPA">WPA/WPA2</SelectItem>
                        <SelectItem value="WEP">WEP</SelectItem>
                        <SelectItem value="nopass">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vcard" className="m-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vcard-fn">First Name</Label>
                    <Input id="vcard-fn" placeholder="John" onChange={(e) => {
                      updateState({ data: `BEGIN:VCARD\nVERSION:3.0\nFN:${e.target.value}\nEND:VCARD` });
                    }} className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vcard-ln">Last Name</Label>
                    <Input id="vcard-ln" placeholder="Doe" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vcard-phone">Mobile</Label>
                    <Input id="vcard-phone" placeholder="+1 234 567 890" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vcard-email">Email</Label>
                    <Input id="vcard-email" placeholder="john@example.com" className="rounded-xl h-12" />
                  </div>
                </div>
              </TabsContent>
              {/* Other tabs will follow once URL works perfectly */}
            </CardContent>
          </Card>
        </Tabs>

        {/* Design Customization Tabs */}
        <Tabs defaultValue="colors" className="w-full">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">Customize Design</h3>
          </div>
          <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-100 p-1 dark:bg-zinc-800">
            <TabsTrigger value="colors" className="gap-2"><Palette className="w-4 h-4" /> Colors</TabsTrigger>
            <TabsTrigger value="shapes" className="gap-2"><Shapes className="w-4 h-4" /> Shapes</TabsTrigger>
            <TabsTrigger value="logo" className="gap-2"><ImageIcon className="w-4 h-4" /> Logo</TabsTrigger>
            <TabsTrigger value="label" className="gap-2"><TypeIcon className="w-4 h-4" /> Label</TabsTrigger>
          </TabsList>

          {/* COLORS TAB */}
          <TabsContent value="colors" className="mt-4 space-y-4">
            <Card className="rounded-3xl border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-semibold">Foreground Color</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-500">Gradient</span>
                      <Switch 
                        checked={qrState.dotsGradient} 
                        onCheckedChange={(v) => updateState({ dotsGradient: v })}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Input 
                      type="color" 
                      value={qrState.dotsColor}
                      onChange={(e) => updateState({ dotsColor: e.target.value })}
                      className="w-12 h-12 p-1 rounded-lg border-none"
                    />
                    {qrState.dotsGradient && (
                      <Input 
                        type="color" 
                        value={qrState.dotsGradientColor}
                        onChange={(e) => updateState({ dotsGradientColor: e.target.value })}
                        className="w-12 h-12 p-1 rounded-lg border-none"
                      />
                    )}
                    <Input 
                      type="text" 
                      value={qrState.dotsColor}
                      onChange={(e) => updateState({ dotsColor: e.target.value })}
                      className="flex-1 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-semibold">Background Color</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-500">Gradient</span>
                      <Switch 
                        checked={qrState.backgroundGradient} 
                        onCheckedChange={(v) => updateState({ backgroundGradient: v })}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Input 
                      type="color" 
                      value={qrState.backgroundColor}
                      onChange={(e) => updateState({ backgroundColor: e.target.value })}
                      className="w-12 h-12 p-1 rounded-lg border-none"
                    />
                    {qrState.backgroundGradient && (
                      <Input 
                        type="color" 
                        value={qrState.backgroundGradientColor}
                        onChange={(e) => updateState({ backgroundGradientColor: e.target.value })}
                        className="w-12 h-12 p-1 rounded-lg border-none"
                      />
                    )}
                    <Input 
                      type="text" 
                      value={qrState.backgroundColor}
                      onChange={(e) => updateState({ backgroundColor: e.target.value })}
                      className="flex-1 rounded-xl h-12"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SHAPES TAB */}
          <TabsContent value="shapes" className="mt-4">
            <Card className="rounded-3xl border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <CardContent className="p-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Label className="font-semibold text-zinc-900 dark:text-zinc-100">Body Shape (Dots)</Label>
                    <Select value={qrState.dotsType} onValueChange={(v) => updateState({ dotsType: v as any })}>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Select dot pattern" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="square">Square</SelectItem>
                        <SelectItem value="rounded">Rounded</SelectItem>
                        <SelectItem value="dots">Dots</SelectItem>
                        <SelectItem value="classy">Classy</SelectItem>
                        <SelectItem value="classy-rounded">Classy Rounded</SelectItem>
                        <SelectItem value="extra-rounded">Extra Rounded</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <Label className="font-semibold text-zinc-900 dark:text-zinc-100">Eye Frame Shape</Label>
                    <Select value={qrState.cornersSquareType} onValueChange={(v) => updateState({ cornersSquareType: v as any })}>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Select corner pattern" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="square">Square</SelectItem>
                        <SelectItem value="dot">Dot</SelectItem>
                        <SelectItem value="extra-rounded">Extra Rounded</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <Label className="font-semibold text-zinc-900 dark:text-zinc-100">Eye Ball Shape</Label>
                    <Select value={qrState.cornersDotType} onValueChange={(v) => updateState({ cornersDotType: v as any })}>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Select corner dot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="square">Square</SelectItem>
                        <SelectItem value="dot">Dot</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LOGO TAB */}
          <TabsContent value="logo" className="mt-4">
            <Card className="rounded-3xl border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <Label className="font-semibold">Upload Central Logo</Label>
                <div className="flex items-center gap-4">
                  <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleLogoUpload}
                    className="rounded-xl h-12 flex-1"
                  />
                  {qrState.image && (
                    <Button variant="destructive" onClick={() => updateState({ image: undefined })} className="rounded-xl h-12">
                      Remove
                    </Button>
                  )}
                </div>
                <p className="text-xs text-zinc-500">Logo will be automatically centered. Transparency is supported.</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LABEL TAB */}
          <TabsContent value="label" className="mt-4">
            <Card className="rounded-3xl border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <Label htmlFor="label-text" className="font-semibold">Text Below QR Code</Label>
                  <Input 
                    id="label-text" 
                    placeholder="e.g. Scan Here for WiFi" 
                    value={qrState.labelText || ''}
                    onChange={(e) => updateState({ labelText: e.target.value })}
                    className="rounded-xl h-12"
                  />
                  <p className="text-xs text-zinc-500">Add a call to action below your QR code.</p>
                </div>
                
                <div className="space-y-4">
                  <Label className="font-semibold">Label Color</Label>
                  <div className="flex gap-4">
                    <Input 
                      type="color" 
                      value={qrState.labelColor || '#000000'}
                      onChange={(e) => updateState({ labelColor: e.target.value })}
                      className="w-12 h-12 p-1 rounded-lg border-none"
                    />
                    <Input 
                      type="text" 
                      value={qrState.labelColor || '#000000'}
                      onChange={(e) => updateState({ labelColor: e.target.value })}
                      className="flex-1 rounded-xl h-12"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Right Column: Preview Stickiness */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 space-y-6">
          <h3 className="text-lg font-bold">Live Preview</h3>
          <QREngine state={qrState} />
          <Card className="rounded-3xl border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <CardContent className="p-4 text-center">
              <p className="text-xs text-zinc-500">
                Processing is 100% local. Your data never leaves your browser.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
