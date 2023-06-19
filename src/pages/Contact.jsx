import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <form>
        <div className='contact__row'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Your name" className='contact__input'/>
        </div>
        <div className='contact__row'>
        <label htmlFor="email">Email</label>
        <input type="text" name="name" id="email" placeholder="Your email" className='contact__input'/>
        </div>
        <div className='contact__row'>
        <label for="city">From where you write to us</label>
        <select id="city" name="city" required>
          <option value="">Select a city</option>
          <option value="A Coruña">A Coruña</option>
          <option value="Álava">Álava</option>
          <option value="Albacete">Albacete</option>
          <option value="Alicante">Alicante</option>
          <option value="Almería">Almería</option>
          <option value="Asturias">Asturias</option>
          <option value="Ávila">Ávila</option>
          <option value="Badajoz">Badajoz</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Burgos">Burgos</option>
          <option value="Cáceres">Cáceres</option>
          <option value="Cádiz">Cádiz</option>
          <option value="Cantabria">Cantabria</option>
          <option value="Castellón">Castellón</option>
          <option value="Ciudad Real">Ciudad Real</option>
          <option value="Córdoba">Córdoba</option>
          <option value="Cuenca">Cuenca</option>
          <option value="Girona">Girona</option>
          <option value="Granada">Granada</option>
          <option value="Guadalajara">Guadalajara</option>
          <option value="Gipuzkoa">Gipuzkoa</option>
          <option value="Huelva">Huelva</option>
          <option value="Huesca">Huesca</option>
          <option value="Jaén">Jaén</option>
          <option value="La Rioja">La Rioja</option>
          <option value="Las Palmas">Las Palmas</option>
          <option value="León">León</option>
          <option value="Lleida">Lleida</option>
          <option value="Lugo">Lugo</option>
          <option value="Madrid">Madrid</option>
          <option value="Málaga">Málaga</option>
          <option value="Murcia">Murcia</option>
          <option value="Navarra">Navarra</option>
          <option value="Ourense">Ourense</option>
          <option value="Palencia">Palencia</option>
          <option value="Pontevedra">Pontevedra</option>
          <option value="Salamanca">Salamanca</option>
          <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
          <option value="Segovia">Segovia</option>
          <option value="Sevilla">Sevilla</option>
          <option value="Soria">Soria</option>
          <option value="Tarragona">Tarragona</option>
          <option value="Teruel">Teruel</option>
          <option value="Toledo">Toledo</option>
          <option value="Valencia">Valencia</option>
          <option value="Valladolid">Valladolid</option>
          <option value="Vizcaya">Vizcaya</option>
          <option value="Zamora">Zamora</option>
          <option value="Zaragoza">Zaragoza</option>
        </select>
        </div>
        <h3>Let us know what you think about our page!</h3>
        <textarea cols="30" rows="8" className='contact__textarea' />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default Contact