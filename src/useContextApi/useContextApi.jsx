import { createContext } from "react";

export const contextApi = createContext();

function useContextApi(props) {
    const vikasGmail = "vikaskumar25273@Outlook.com"
    const vikasPhone = "9999735631"
    const amitPhone = "+91 8447987391"
    const amitGmail = "helpindika@gmail.com"
    const koushalPhone = "935440XXXX"
    const location = "Delhi, India"

    return (
        <div>
            <contextApi.Provider value={{ vikasGmail, vikasPhone, location, amitGmail, amitPhone, koushalPhone }}>
                {props.children}
            </contextApi.Provider>
        </div>
    )

}

export default useContextApi