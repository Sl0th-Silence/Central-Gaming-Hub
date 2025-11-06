export default function Footer() {

    {/*
        this is used for devloper credits, used tool and what is used for what (sorta)
        
        for example, to make this I used Electron (for the window application and file scanning), 
        and React + Vite for the actual website end of the ordeal.
    */}
    return <div className="footer">
        <table id="table">
            <tbody>
                <tr>
                    {/* 
                        the tableCol just lets me space out the table completely, so it takes up 
                        the whole area and not just the area it needs to be ther 
                    */}
                    <td id="tableCol">
                        <u><b><h3>Developed By:</h3></b></u>
                        <ul>
                            <li>Sl0th-Silence - Data Collection & Planning</li>
                            {/* I added this cause it's funny and I wanted to */}
                            <li><img id="stare" src="https://preview.redd.it/im-not-staring-v0-2ooxuyrnpr9e1.png?width=525&auto=webp&s=0b3949b129bd72b730a30b1d41b60d9785eec5d6" alt="" height="35px"/> Smitty  - Frontend & Backend Development</li>
                        </ul>
                        
                    </td>
                    <td id="tableCol">
                        <u><b><h3>Tools Used:</h3></b></u>
                        <p>Desktop App:</p>
                        <ul>
                            <li>Electron</li>
                            <li>React + Vite</li>
                        </ul>
                        
                        <p>Data Collection:</p>
                        <ul>
                            <li>Python</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
            
        </table>
        {/*
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠐⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠰⢻⡟⠁⣀⣤⡶⡶⣦⢤⣍⣙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠡⡾⠹⡈⡆⡇⡀⠘⠨⠛⣦⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⠾⠁⠀⠃⠇⡇⡇⢇⠁⢀⢸⠆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢧⡀⠾⠀⠀⡄⡇⡇⢸⢀⡝⢩⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⠇⣨⠀⠀⠀⢀⣧⣧⣧⣬⠀⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣴⣶⣟⠑⠂⠒⠉⠉⠉⠉⠁⢐⣚⣛⡋⠁⠒⠚⠒⣃⠈⢂⠓⠄⡉⠈⠉⠉⠁⠂⠲⣶⠮⠭⠉⠉⠙⢛⠛⠛⠻⠿⠿⠿⠿⠿⠟⡛⠿⣿
            ⣿⣿⣟⣛⣛⡿⢿⣛⣿⣽⣿⣿⣥⣤⣴⣷⣶⣶⡄⣿⠀⢀⡆⢁⣀⠀⠀⠀⠀⣆⣤⠄⣓⣨⣤⣍⣥⣅⣄⣤⡵⠠⠤⣴⣟⣯⣴⣿⣮⣤
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⠀⠀⡇⠐⢁⣤⡄⠀⠀⢻⣀⣰⣼⣫⣭⣬⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣉⣋⣀⡀⢇⣀⣹⣻⣷⣆⣄⠘⠯⣿⣿⣭⠍⠿⠿⢿⣿⣿⣿⣻⡿⠿⢿⣿⣿⣿⣿⣿
            ⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣷⠿⠶⠾⠿⣯⡬⠭⠍⡿⠓⠒⠻⣿⡿
        */}
        <img id="chair" src="https://i.imgflip.com/5otvtn.png" alt=""/>
    </div>
}