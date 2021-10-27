export const getExternalLinkWithDomain = (link: string, text: string, keep: boolean) => {
  const isHttpLink = link?.startsWith("http");
  let val = '';
  if ( isHttpLink ) {
    if ( keep ) {
      if ( text ) {
        const newLink = link.replace(text, window.location.host);
        val = `${newLink}`;
      } else {
        const repString = link.split('/');
        const newLink = link.replace(repString[2], window.location.host);
        val = `${newLink}`;
      }
    } else {
      val = `${link}`;
    }
  } else {
    val = `${window.location.origin}/${link}`;
  }
  return val;
};