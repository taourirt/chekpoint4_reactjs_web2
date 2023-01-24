import React from 'react'

export default function main() {
  return (
    <div className='general'>
        <img className='aligner' src="./image/agence_immo.avif" alt="" />
        <div className='ligne'>
            <div>
            <img className='photo'  src="./image/villa1.avif" alt="" />
            <h3>El Biar</h3>
            <h4> Prix: 2Md</h4>
               <form>
                   <div className="form-group mb-5">
                      <label for="intervalle">Intervalle</label>
                      <input type="range" className='form-control-range' id='intervalle'/>
                   </div>
            </form>

        </div>
         <div>
            <img className='photo'  src="./image/villa2.avif" alt="" />
            <h3>Hydra</h3>
            <h4> Prix: 5Md</h4>
               <form>
                   <div className="form-group mb-5">
                      <label for="intervalle">Intervalle</label>
                      <input type="range" className='form-control-range' id='intervalle'/>
                   </div>
            </form>

        </div>
         <div>
            <img className='photo'  src="./image/villa3.avif" alt="" />
            <h3>Ben Aknoun</h3>
            <h4> Prix: 3.7Md</h4>
               <form>
                   <div className="form-group mb-5">
                      <label for="intervalle">Intervalle</label>
                      <input type="range" className='form-control-range' id='intervalle'/>
                   </div>
            </form>

        </div>
        </div>
        
    </div>
  )
}
