'use client';
import { CldUploadButton } from 'next-cloudinary';
import { Upload } from 'lucide-react';

const UploadButton = () => {
  return <CldUploadButton signatureEndpoint="/api/sign-cloudinary-params">
    <span className='flex gap-2 items-center'>
    <Upload className="h-4 w-4" /> Upload
    </span>
    </CldUploadButton>;
}
export default UploadButton;