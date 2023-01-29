import React, { useEffect, useState } from "react";
import { UserBackApi } from "./Userbackend";


export function HeaderMain() {
    return(
        <main>
        <div>
            <h2 >
                Shary Energy
            </h2>
            <UserBackApi/>
        </div>
        </main>
    )
}