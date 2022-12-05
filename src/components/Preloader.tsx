
import { ClockLoader } from "react-spinners";

type LoaderProps = {
    isLoading: boolean;
};
export const Preloader = ({isLoading}: LoaderProps ) => {
  return (
    <div className="preloader">
    <ClockLoader loading={isLoading} color="#012C56" size={150} />
    </div>
  )
}
