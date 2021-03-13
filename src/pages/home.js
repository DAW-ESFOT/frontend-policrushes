import React from 'react'
import withAuth from "@/hocs/withAuth";

function Home() {
    return (
        <div>
            home
        </div>
    )
}

export default withAuth(Home); 