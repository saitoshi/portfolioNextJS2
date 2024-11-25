'use client';
import React, { useState } from 'react';
type imageProps = {
  gallery: string[];
  comment?: string[];
};
export const Gallery = ({ gallery }: imageProps) => {
  const imageStyle: React.CSSProperties = {
    height: '75%',
    width: '50%',
    display: 'inline-block',
  };
  /* eslint no-unused-vars: 0 */
  let [index, setIndex] = useState<number>(0);
  return (
    <div>
      <img style={imageStyle} src={gallery[index]} />
      <br />

      <br />
      {gallery.length > 1 ? (
        <div style={{ display: 'inline-block' }}>
          <br />
          <button
            onClick={() => {
              index = index - 1;
              console.log(index);
              if (index < 0) {
                index = gallery.length - 1;
              }
              setIndex(index);
            }}>
            PREV
          </button>
          &nbsp;
          <button
            onClick={() => {
              index = index + 1;

              if (index === gallery.length) {
                index = 0;
              }
              setIndex(index);
            }}>
            NEXT
          </button>
        </div>
      ) : (
        <div style={{ display: 'none' }} />
      )}
    </div>
  );
};
