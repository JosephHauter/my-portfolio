import React from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Header from '../components/Header';
import { Document, Page } from 'react-pdf';
import resume from './Resume.pdf'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
  return (
    <div>      
      <Header />
      <br/><br/><br/><br/>      
      <div className="container mx-auto mb-10 bg-slate-50	" style={{ display: 'flex', justifyContent: 'center' }}>
        <Document file={resume}>
          <Page pageNumber={1} scale={1.5} /> {/* Increase scale to make PDF larger */}
        </Document>
      </div>
    </div>
  );
}

export default Resume;
