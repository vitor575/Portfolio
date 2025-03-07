export{};

interface FullpageApi {
    moveTo: (section: number) => void;
  }
  
  declare global {
    interface Window {
      fullpage_api: FullpageApi;
    }
  }
  