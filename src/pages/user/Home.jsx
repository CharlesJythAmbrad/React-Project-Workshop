import Button from "../../components/ui/button";
import React from "react";
import Card from "../../components/ui/card";
import { Link } from "react-router-dom";
import Button1 from "../../components/ui/button1";
export default function Home(){
    return(
        <>
        <div>
            <h1 className="text-3xl font-bold underline">
                This is User Home Page
            </h1>
            <Link to="/about">
                  <Button/>
            </Link>
            <Link to="/admin_login">
                  <Button1/>
            </Link>
            
          
            <Card/>
        </div>
        </>
    )
    }