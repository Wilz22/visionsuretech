export function getBookingUrl(value:string|undefined):string|null {
 if(!value?.trim())return null;
 const url=new URL(value);
 if(url.protocol!=='https:'||url.username||url.password)throw new Error('Booking URL must be a public HTTPS address without credentials.');
 return url.href;
}
