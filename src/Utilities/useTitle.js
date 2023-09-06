import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Dr.Teeth`;
  }, [title]);
};
export default useTitle;
