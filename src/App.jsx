import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js.js';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  let tabContent = 'Please  click a button'
  function handleSelect(selectedButton){
    tabContent = selectedButton;
    console.log(tabContent);
    
     //selectedButton => 'components, 'jsx', 'props','state'
        console.log('Hello World -Selected', selectedButton);

    }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"> <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />  
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /></ul></section>
            <section id="examples">
              <h2>Examples</h2>
              <menu>
                <TabButton label="Components" onSelect={()=>handleSelect('components')}></TabButton>
                <TabButton label="JSX" onSelect={()=>handleSelect('jsx')}></TabButton>
                <TabButton label="Props" onSelect={()=>handleSelect('props')}></TabButton>
                <TabButton label="State" onSelect={()=>handleSelect('state')}></TabButton>
                </menu>
            {tabContent}
            </section>

      </main>
    </div>
  );
}

export default App;
