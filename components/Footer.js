import whitelogo from '../asset/white-logo.png';
import bgimage from '../asset/bgimage.png';
import Image from 'next/image'

export default function Footer() {

    return (
        <div className="lg:flex lg:flex-col" style={{ paddingTop: 175, marginTop: 160, background: "#182C51" }}>
            <div className="lg:flex" style={{ paddingLeft: 160, paddingRight: 160, flex: 1 }}>
                <div style={{ flex: 0.40 }}>
                    <div style={{ marginBottom: 24, cursor: "pointer" }}>
                        <Image
                            src={whitelogo}

                            alt="white logo" />
                    </div>
                    <div style={{
                        width: 233,
                        height: 84,
                        left: 0,
                        top: 61,
                        fontFamily: "Open Sans",
                        fontWeight: "600",
                        fontSize: 14,
                        lineHeight: "150%",
                        color: "#FFFFFF",
                    }}>
                        A one-stop hub for solutions to your business needs and for research and technological development!
                    </div>

                    <div style={{
                        marginTop: 36,
                        width: 144,
                        display: "flex",
                        justifyContent: "space-between",
                        cursor: "pointer"
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#3D3D3D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0006 5.6001C10.2624 5.6001 10.0443 5.6077 9.36161 5.63876C8.68027 5.66997 8.2152 5.77783 7.80827 5.9361C7.38733 6.09957 7.03026 6.31824 6.67452 6.67411C6.31852 7.02985 6.09985 7.38692 5.93585 7.80772C5.77718 8.21479 5.66918 8.68 5.63851 9.36107C5.60798 10.0437 5.59998 10.262 5.59998 12.0002C5.59998 13.7383 5.60771 13.9558 5.63864 14.6385C5.66998 15.3198 5.77784 15.7849 5.93598 16.1918C6.09958 16.6127 6.31825 16.9698 6.67412 17.3256C7.02972 17.6816 7.38679 17.9008 7.80747 18.0642C8.21467 18.2225 8.67987 18.3304 9.36108 18.3616C10.0438 18.3926 10.2618 18.4002 11.9998 18.4002C13.7381 18.4002 13.9555 18.3926 14.6382 18.3616C15.3195 18.3304 15.7851 18.2225 16.1924 18.0642C16.6132 17.9008 16.9697 17.6816 17.3253 17.3256C17.6813 16.9698 17.9 16.6127 18.064 16.1919C18.2213 15.7849 18.3293 15.3197 18.3613 14.6386C18.392 13.9559 18.4 13.7383 18.4 12.0002C18.4 10.262 18.392 10.0439 18.3613 9.3612C18.3293 8.67986 18.2213 8.21479 18.064 7.80785C17.9 7.38692 17.6813 7.02985 17.3253 6.67411C16.9693 6.31811 16.6133 6.09944 16.192 5.9361C15.7839 5.77783 15.3186 5.66997 14.6373 5.63876C13.9546 5.6077 13.7373 5.6001 11.9986 5.6001H12.0006ZM11.4264 6.75343C11.5968 6.75316 11.7869 6.75343 12.0005 6.75343C13.7094 6.75343 13.9119 6.75956 14.5867 6.79023C15.2107 6.81876 15.5494 6.92303 15.775 7.01063C16.0737 7.12663 16.2866 7.2653 16.5105 7.4893C16.7345 7.7133 16.8731 7.92664 16.9894 8.22531C17.077 8.45064 17.1814 8.78931 17.2098 9.41332C17.2405 10.088 17.2471 10.2907 17.2471 11.9987C17.2471 13.7067 17.2405 13.9094 17.2098 14.584C17.1813 15.208 17.077 15.5467 16.9894 15.7721C16.8734 16.0707 16.7345 16.2834 16.5105 16.5073C16.2865 16.7313 16.0738 16.8699 15.775 16.9859C15.5497 17.0739 15.2107 17.1779 14.5867 17.2065C13.912 17.2371 13.7094 17.2438 12.0005 17.2438C10.2916 17.2438 10.0891 17.2371 9.41439 17.2065C8.79038 17.1777 8.45171 17.0734 8.22598 16.9858C7.92731 16.8698 7.71397 16.7311 7.48997 16.5071C7.26597 16.2831 7.1273 16.0703 7.01103 15.7715C6.92343 15.5462 6.81903 15.2075 6.79063 14.5835C6.75996 13.9088 6.75383 13.7062 6.75383 11.9971C6.75383 10.288 6.75996 10.0864 6.79063 9.41172C6.81916 8.78771 6.92343 8.44904 7.01103 8.22344C7.12703 7.92477 7.26597 7.71143 7.48997 7.48743C7.71397 7.26343 7.92731 7.12476 8.22598 7.00849C8.45158 6.92049 8.79038 6.81649 9.41439 6.78783C10.0048 6.76116 10.2336 6.75316 11.4264 6.75182V6.75343ZM15.4169 7.81611C14.9928 7.81611 14.6488 8.15971 14.6488 8.58385C14.6488 9.00785 14.9928 9.35185 15.4169 9.35185C15.8409 9.35185 16.1849 9.00785 16.1849 8.58385C16.1849 8.15984 15.8409 7.81611 15.4169 7.81611ZM12.0006 8.71345C10.1855 8.71345 8.71389 10.1851 8.71389 12.0001C8.71389 13.8152 10.1855 15.2862 12.0006 15.2862C13.8157 15.2862 15.2868 13.8152 15.2868 12.0001C15.2868 10.1851 13.8157 8.71345 12.0006 8.71345ZM12.0006 9.86679C13.1787 9.86679 14.1339 10.8219 14.1339 12.0001C14.1339 13.1783 13.1787 14.1335 12.0006 14.1335C10.8223 14.1335 9.86721 13.1783 9.86721 12.0001C9.86721 10.8219 10.8223 9.86679 12.0006 9.86679Z" fill="white" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#3D3D3D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.4 11.9912C18.4 12.424 18.3559 12.8563 18.2694 13.2776C18.185 13.6889 18.06 14.0927 17.8962 14.4787C17.7362 14.8579 17.5378 15.2233 17.3059 15.5641C17.0774 15.9027 16.8143 16.2204 16.5252 16.5099C16.2355 16.7983 15.9167 17.0607 15.5783 17.2901C15.2364 17.5204 14.8705 17.7186 14.4911 17.8793C14.1045 18.0422 13.6997 18.167 13.2888 18.2513C12.8669 18.338 12.4331 18.3823 11.9997 18.3823C11.5659 18.3823 11.1321 18.338 10.7109 18.2513C10.2993 18.167 9.89459 18.0422 9.50832 17.8793C9.12893 17.7186 8.76264 17.5204 8.42076 17.2901C8.0823 17.0607 7.76354 16.7983 7.47446 16.5099C7.18508 16.2204 6.92193 15.9027 6.69317 15.5641C6.46253 15.2233 6.26376 14.8579 6.10313 14.4787C5.93936 14.0927 5.81405 13.6889 5.72936 13.2776C5.64374 12.8563 5.59998 12.424 5.59998 11.9912C5.59998 11.5581 5.64371 11.1249 5.72939 10.7045C5.81408 10.2932 5.93938 9.88881 6.10316 9.50342C6.26378 9.12396 6.46256 8.75823 6.69319 8.41744C6.92195 8.07854 7.18511 7.76147 7.47449 7.47155C7.76357 7.18319 8.08233 6.92139 8.42078 6.69234C8.76267 6.46108 9.12895 6.26295 9.50834 6.10191C9.89462 5.93866 10.2993 5.81354 10.7109 5.72992C11.1322 5.6438 11.5659 5.6001 11.9997 5.6001C12.4332 5.6001 12.8669 5.6438 13.2888 5.72992C13.6998 5.81357 14.1045 5.93869 14.4911 6.10191C14.8705 6.26292 15.2364 6.46108 15.5783 6.69234C15.9168 6.92139 16.2356 7.18319 16.5252 7.47155C16.8143 7.76147 17.0775 8.07854 17.3059 8.41744C17.5378 8.75823 17.7362 9.12398 17.8962 9.50342C18.06 9.88881 18.185 10.2932 18.2694 10.7045C18.3559 11.1249 18.4 11.5581 18.4 11.9912ZM9.66766 7.05463C8.14351 7.77334 7.00595 9.17575 6.65124 10.8659C6.79533 10.8672 9.07295 10.8959 11.6971 10.1996C10.7512 8.52133 9.74049 7.15171 9.66766 7.05463ZM12.15 11.0401C9.33577 11.8814 6.6353 11.8208 6.53844 11.8171C6.53686 11.8758 6.53405 11.9325 6.53405 11.9912C6.53405 13.3933 7.06376 14.6715 7.93444 15.638C7.93256 15.6352 9.42828 12.9855 12.3778 12.033C12.449 12.0093 12.5216 11.9881 12.5934 11.9675C12.4563 11.6573 12.3065 11.3465 12.15 11.0401ZM15.6092 7.89504C14.647 7.04776 13.3835 6.53382 11.9997 6.53382C11.5556 6.53382 11.1246 6.5875 10.7118 6.68673C10.7937 6.79659 11.8203 8.15656 12.755 9.8704C14.8173 9.09836 15.5958 7.915 15.6092 7.89504ZM12.966 12.8719C12.9538 12.8759 12.9416 12.8794 12.9297 12.8837C9.70494 14.0063 8.65184 16.2687 8.64045 16.2934C9.56833 17.0139 10.7321 17.4486 11.9997 17.4486C12.7566 17.4486 13.4776 17.2947 14.1335 17.0161C14.0526 16.5393 13.7351 14.8678 12.966 12.8719ZM15.0539 16.5174C16.2811 15.6905 17.1527 14.3773 17.3959 12.8562C17.2834 12.82 15.7542 12.3366 13.9901 12.6191C14.707 14.5864 14.9983 16.1885 15.0539 16.5174ZM13.1757 10.6837C13.3026 10.9439 13.4254 11.2088 13.5388 11.4751C13.5792 11.5706 13.6185 11.6642 13.657 11.7578C15.5346 11.5219 17.3843 11.9188 17.4634 11.935C17.4509 10.6412 16.9874 9.45379 16.2206 8.52416C16.2102 8.5388 15.3336 9.80361 13.1757 10.6837Z" fill="white" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#3D3D3D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.6406 9.7537L11.6658 10.1689L11.2461 10.1181C9.71843 9.92318 8.38383 9.26221 7.25067 8.15211L6.69668 7.6013L6.55399 8.00805C6.25181 8.91477 6.44487 9.87234 7.0744 10.5164C7.41015 10.8723 7.33461 10.9231 6.75544 10.7113C6.55399 10.6435 6.37772 10.5926 6.36093 10.6181C6.30218 10.6774 6.50363 11.4485 6.66311 11.7536C6.88134 12.1773 7.32621 12.5925 7.81305 12.8382L8.22434 13.0331L7.73751 13.0416C7.26746 13.0416 7.25067 13.0501 7.30103 13.228C7.46891 13.7789 8.13201 14.3636 8.87066 14.6178L9.39108 14.7957L8.93781 15.0669C8.26631 15.4567 7.4773 15.677 6.68829 15.694C6.31057 15.7025 6 15.7364 6 15.7618C6 15.8465 7.02404 16.3211 7.61999 16.5075C9.40786 17.0583 11.5315 16.821 13.1263 15.8804C14.2595 15.211 15.3926 13.8805 15.9214 12.5925C16.2068 11.9061 16.4922 10.6519 16.4922 10.0503C16.4922 9.66049 16.5174 9.60964 16.9874 9.14357C17.2644 8.8724 17.5246 8.57581 17.575 8.49107C17.6589 8.33007 17.6505 8.33007 17.2224 8.47412C16.509 8.72834 16.4083 8.69445 16.7608 8.31312C17.021 8.04195 17.3316 7.55046 17.3316 7.4064C17.3316 7.38098 17.2057 7.42335 17.063 7.49961C16.9119 7.58435 16.5761 7.71146 16.3243 7.78773L15.8711 7.93179L15.4598 7.65214C15.2331 7.49961 14.9142 7.33013 14.7463 7.27929C14.3182 7.16065 13.6635 7.1776 13.2774 7.31318C12.2282 7.69451 11.5651 8.6775 11.6406 9.7537Z" fill="white" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#3D3D3D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0008 7.87476C17.5516 8.02589 17.9853 8.4712 18.1325 9.03671C18.4 10.0616 18.4 12.2001 18.4 12.2001C18.4 12.2001 18.4 14.3385 18.1325 15.3635C17.9853 15.929 17.5516 16.3743 17.0008 16.5255C16.0027 16.8001 12 16.8001 12 16.8001C12 16.8001 7.99732 16.8001 6.99913 16.5255C6.44837 16.3743 6.01462 15.929 5.86742 15.3635C5.60001 14.3385 5.60001 12.2001 5.60001 12.2001C5.60001 12.2001 5.60001 10.0616 5.86742 9.03671C6.01462 8.4712 6.44837 8.02589 6.99913 7.87476C7.99732 7.6001 12 7.6001 12 7.6001C12 7.6001 16.0027 7.6001 17.0008 7.87476ZM10.8 10.4001V14.4001L14 12.4001L10.8 10.4001Z" fill="white" />
                        </svg>

                    </div>
                </div>
                <div>

                </div>
                <div style={{ flex: 0.25 }}>
                    <div style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: 24,
                        color: "#FFFFFF",
                    }}>
                        Services
                    </div>
                    <svg width="48" height="2" viewBox="0 0 48 2" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 24 }}>
                        <line y1="1" x2="48" y2="1" stroke="#6FC446" strokeWidth="2" />
                    </svg>
                    <ol>
                        <li style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginBottom: 12,
                            cursor: "pointer"
                        }}> Product Development</li>
                        <li style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginBottom: 12,
                            cursor: "pointer"
                        }}>Branding </li>
                        <li style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginBottom: 12,
                            cursor: "pointer"
                        }}>Business Development </li>
                        <li style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginBottom: 12,
                            cursor: "pointer"
                        }}>Marketing </li>
                        <li style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginBottom: 12,
                            cursor: "pointer"
                        }}>Web/App </li>

                    </ol>
                </div>
                <div className="absolute right-80">
                    <Image src={bgimage} alt="the images" />
                </div>
                <div style={{ flex: 0.30 }}>
                    <div style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: 24,
                        color: "#FFFFFF",
                    }}>
                        Quicklinks
                    </div>
                    <svg width="48" height="2" viewBox="0 0 48 2" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 24 }}>
                        <line y1="1" x2="48" y2="1" stroke="#6FC446" strokeWidth="2" />
                    </svg>

                    <ol>
                        <li style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginBottom: 12,
                            cursor: "pointer"
                        }}>About Us</li>
                        <li style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginBottom: 12,
                            cursor: "pointer"
                        }}>Services </li>
                        <li style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginBottom: 12,
                            cursor: "pointer"
                        }}>{"Tech R&D"}</li>
                        <li style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginBottom: 12,
                            cursor: "pointer"
                        }}>FAQ </li>
                        <li style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            color: "#FFFFFF",
                            marginBottom: 12,
                            cursor: "pointer"
                        }}>Contact</li>

                    </ol>
                </div>

                <div>
                    <div style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: 24,
                        color: "#FFFFFF",
                    }}>
                        Contacts
                    </div>
                    <svg width="48" height="2" viewBox="0 0 48 2" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 24 }}>
                        <line y1="1" x2="48" y2="1" stroke="#6FC446" strokeWidth="2" />
                    </svg>
                    <ol>
                        <li style={{
                            width: 223,
                            fontFamily: "Open Sans",
                            fontStyle: "normal",
                            fontWeight: "600",

                            fontFeatureSettings: "'salt' on, 'liga' off",
                            fontSize: 14,
                            color: "#FFFFFF",
                            flex: "none",
                            order: "0",
                            flexGrow: "0",
                            marginBottom: 24,
                        }}>
                            Address: Cyclebreeze Tech Park, Amazing Spring Suites, Under G, Ogbomoso, Nigeria
                    </li>
                        <li style={{
                            width: 196,
                            height: 24,
                            fontFeatureSettings: "'salt' on, 'liga' off",
                            fontFamily: "Open Sans",
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: 14,
                            fontFeatureSettings: "'salt' on, 'liga' off",
                            color: "#FFFFFF",
                            flex: "none",
                            flexGrow: 0,
                        }}>
                            Email: info@cyclebreeze.com
                    </li>
                        <li style={{
                            marginTop: 24,
                            width: 180,
                            height: 48,
                            left: 0,
                            top: 144,

                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: 14,
                            fontFeatureSettings: "'salt' on, 'liga' off",
                            color: " #FFFFFF"
                        }}>
                            Phone: +234 810 997 6152
                            +234 701 120 1008
                    </li>

                    </ol>

                </div>

            </div>
            <div className="flex justify-between items-center" style={{
                backgroundColor: "#0D1D3B",
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: 14,
                fontFeatureSettings: "'salt' on, 'liga' off",
                color: "#D9DBE1",
                height: 72, paddingLeft: 160, paddingRight: 160, marginTop: 50
            }}>
                <div>
                    © 2022 Cycle Breeze. All rights reserved
            </div>
                <div className="flex">
                    <div>
                        Privacy Policy
                    </div>
                    <div style={{ marginLeft: 8, marginRight: 8 }}>
                        -
                    </div>
                    <div>
                        {"Terms & Conditions"}
                    </div>
                </div>
            </div>
        </div>
    )
}