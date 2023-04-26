import React, { useEffect } from "react";

export const Ads = (props) => {
  const { dataAdSlot } = props;

  useEffect(() => {
    try{
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    catch(ex)
    {
     console.log(ex); 
    }
  }, []);

  return (
    <>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1234567890"
        data-ad-slot={dataAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </>
  )
}