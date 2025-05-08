import { SignInButton, SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";

const DotIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    )
  }
  
const SignIn = ()=>{


    const { has, isLoaded } = useAuth()

        if (!isLoaded) {
            return (
                <button className={"btn"}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd">
                        <path
                         d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189"/>
                    </svg>
                </button>
            )
        }

    const isAdmin = has({ permission: 'org:dashboard:admin' })
        
    return(
        <div className={"d-flex justify-content-md-center"}>
                                <SignedIn>
                                <UserButton>
                                        {isAdmin && (
                                        <UserButton.MenuItems>
                                            <UserButton.Link
                                            label="Dashboard"
                                            labelIcon={<DotIcon />}
                                            href="/admin"
                                            />
                                        </UserButton.MenuItems>
                                        )}
                                    </UserButton>
                                </SignedIn>
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <div>
                                        <button className={"btn d-none d-md-inline"}>
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                                 fillRule="evenodd"
                                                 clipRule="evenodd">
                                                <path
                                                    d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189"/>
                                            </svg>
                                        </button>
                                        <a type="button" className="nav-link link-dark d-md-none">Log In / Sign Up</a>
                                        </div>
                                    </SignInButton>
                                </SignedOut>
                            </div>
    )
}

export default SignIn