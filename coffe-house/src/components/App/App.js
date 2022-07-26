import { useState } from 'react';

import Navigation from '../Nav/Nav';
import OurCoffeHeader from '../Header-our-coffe/Header-our-coffe';
import MainHeader from "../Main-header/Main-header";
import YourPleasure from '../Header-your-pleasure/Header-your-pleasure';
import MainPage from '../Main-page/Main-page';
import AboutBeans from "../About-beans/About-beans";
import MainaboutUsCards from "../Card-container/Card-container";
import SearchPanel from '../Search/Search';
import AppFilter from '../Filter/Filter';


import './app.css';


import logo from '../Main-about-us/Beans logo.png';
import logoBeansW from './img/Group-8.png';
import logoBeansB from './img/Group.png';
import imgGirl from './img/girl.jpg';
import imgCoffe from './img/coffee.png';
import imgCoffeAbout from './img/arom.jpg';
import cardImage from '../Main-page/img/card3.png';

const headerText = 'About our beans';
const headerText1 = 'About our goods';
const headerText2 = 'About it';
const classes = 'card-body secondary';
const aligns = 'left';


const App = () => {   
     
    const data = [
        {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Brasil', prise: '6.99$', id:1},
        {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Kenya', prise: '6.99$', id:2},
        {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Columbia', prise: '6.99$', id:3},
        {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Brasil', prise: '6.99$', id:4},
        {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Brasil', prise: '6.99$', id:5},
        {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Brasil', prise: '6.99$', id:6}
    ];
    
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [renderHeader, setRenderHeader] = useState('main');
        
    const onPageSelect = renderHeader => {
        setRenderHeader(renderHeader);        
    }

    const search = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.country.indexOf(term) > -1
        })
    }

    const onUpdateSearch = term => {
        setTerm(term)
    }

    const filterCards = (items, filter) => {
        switch (filter) {
            case 'brasil': 
                return items.filter(item => item.country === 'Brasil');
            case 'kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter)
    }

    
    const newData= filterCards(search(data, term), filter);
    let headerPagePart;
    let headerClassName;
    let mainPagePart;

    if (renderHeader === 'main') {
        headerPagePart = <MainHeader onPageSelect = {onPageSelect}/>;      
        headerClassName ='main-page';                                      
        mainPagePart = <MainPage onPageSelect = {onPageSelect}/>;
    } else if (renderHeader === 'coffe') {
        headerPagePart = <OurCoffeHeader />; 
        headerClassName ='other-page';                       
        mainPagePart = 
            <main>
                <div>
                    < AboutBeans image = {imgGirl} 
                        headerText = {headerText}/>
                    <div>
                        <div className='controls'>
                            <SearchPanel onUpdateSearch={onUpdateSearch}/>
                            <AppFilter onFilterSelect={onFilterSelect}/>
                        </div>
                        < MainaboutUsCards data={newData}
                            classes={classes}
                            aligns={aligns}
                            onPageSelect = {onPageSelect}/>
                    </div>
                </div>
            </main>
    }  else if (renderHeader === 'pleasure') {
        headerPagePart =  <YourPleasure />;
        headerClassName ='other-page';   
        mainPagePart =            
            <main>
                <div>
                    < AboutBeans image = {imgCoffe}
                        headerText = {headerText1} />
                    <div>
                        < MainaboutUsCards data={data}
                            classes={classes}
                            aligns={aligns}
                            onPageSelect = {onPageSelect}/>
                    </div>
                </div>    
            </main>                    
    }  else if (renderHeader === 'about') {
        headerPagePart =  <OurCoffeHeader />;                                       
        headerClassName ='other-page';                 
        mainPagePart = 
            <main>
                <div>
                    < AboutBeans image = {imgCoffeAbout} 
                        headerText = {headerText2} />
                </div>
            </main>
    }
    return (
        <div className='App'>
            <header className={headerClassName}>
                <Navigation logo={logoBeansW}
                    onPageSelect = {onPageSelect} /> 
                {headerPagePart}                                     
            </header>  

            {mainPagePart}

            <footer>
                <Navigation logo = {logoBeansB}
                    onPageSelect = {onPageSelect} />
                <img  src={logo} alt='logo'></img>
            </footer >
        </div>
    )      
    
}

export default App;