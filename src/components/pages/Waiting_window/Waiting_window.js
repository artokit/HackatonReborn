import React from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import classes from "./Waiting_window.module.css";

        
const Waitingwindow = () => {
    return (
        <Wrapper>
            <div className={classes.page}>
            <div className={classes.navigation}>
                <div className={classes.typetask}><div className={classes.type}>Криптография</div></div>
                <svg className={classes.vector} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4027 0.460261C11.9397 -0.15342 12.8103 -0.15342 13.3473 0.460261L21.5973 9.88883C22.1342 10.5025 22.1342 11.4975 21.5973 12.1112L13.3473 21.5397C12.8103 22.1534 11.9397 22.1534 11.4027 21.5397C10.8658 20.9261 10.8658 19.9311 11.4027 19.3174L17.3055 12.5714H1.375C0.615608 12.5714 0 11.8679 0 11C0 10.1321 0.615608 9.42857 1.375 9.42857H17.3055L11.4027 2.6826C10.8658 2.06892 10.8658 1.07394 11.4027 0.460261Z" fill="white"/>
</svg>
                <div className={classes.leveltask}><div className={classes.level}>Легко</div></div>
                <svg className={classes.vector} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4027 0.460261C11.9397 -0.15342 12.8103 -0.15342 13.3473 0.460261L21.5973 9.88883C22.1342 10.5025 22.1342 11.4975 21.5973 12.1112L13.3473 21.5397C12.8103 22.1534 11.9397 22.1534 11.4027 21.5397C10.8658 20.9261 10.8658 19.9311 11.4027 19.3174L17.3055 12.5714H1.375C0.615608 12.5714 0 11.8679 0 11C0 10.1321 0.615608 9.42857 1.375 9.42857H17.3055L11.4027 2.6826C10.8658 2.06892 10.8658 1.07394 11.4027 0.460261Z" fill="white"/>
</svg>
                <div className={classes.numbertask}>1</div>
            </div>
            <div className={classes.expect}><div className={classes.expecttext}>Ожидайте подключения игрока...</div>
                
            </div>
            </div>
            
        </Wrapper>
         );
};

export default Waitingwindow;
