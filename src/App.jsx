
import { PizzaData } from './component/data/PizzaData';
import Footer from './component/Footer';
import Header from './component/Header';
import PizzaCard from './component/PizzaCard';

const App = () => {
  return (
    <main>
      <Header />
      
      <div className="container space-y-3 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-2 gap-6 w-fit">
        {PizzaData.map(pizza => (
          <PizzaCard
            key={pizza.id}
            name={pizza.name}
            description={pizza.description}
            stock={pizza.stock}
            image={pizza.image}
          />
        ))
        }
        
        
    </div>
      <Footer />
    </main>
  );
};

export default App;
