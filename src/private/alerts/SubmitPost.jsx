import { RiCloseCircleLine } from "react-icons/ri";

export const SubmitPost = ({ showBadge, setShowBadge }) => {
  const closeBadge = () => {
    setShowBadge("hidden");
  };
  return (
    <>
      <div className={showBadge}>
        <div className="toast z-10">
          <div className="alert alert-success">
            <div>
              <span>El artículo fue subido exitosamente.</span>
            </div>
            <RiCloseCircleLine
              className="cursor-pointer text-2xl"
              onClick={closeBadge}
            />
          </div>
        </div>
      </div>
    </>
  );
};
