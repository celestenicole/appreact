import React, { useState, useEffect } from 'react';
import { ChevronLeft, MapPin, Clock, ChevronRight, FileText, X } from 'lucide-react';
import plazaVeaLogo from './plazavea.png';

// Componente de logo de tarjeta BCP
const BCPCardLogo = ({ className = "w-16 h-10" }) => (
  <div className={`${className} rounded relative shadow-sm`} style={{
    background: 'linear-gradient(135deg, #B8904D 0%, #D4B76A 30%, #F4E4B8 50%, #D4B76A 70%, #B8904D 100%)',
  }}>
    {/* Patrón de puntos decorativos */}
    <div className="absolute inset-0 rounded" style={{
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',

      backgroundSize: '4px 4px',

      opacity: 0.4
    }}></div>
    
    {/* Logo BCP en la esquina superior izquierda */}
    <div className="absolute top-1 left-1.5">
      <svg width="24" height="8" viewBox="0 0 60 20" className="drop-shadow-sm">
        <text x="2" y="14" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">BCP</text>
      </svg>
    </div>
    
    {/* Chip simulado */}
    <div className="absolute top-3.5 left-1.5 w-4 h-3 rounded-sm" style={{
      background: 'linear-gradient(135deg, #DAC87F 0%, #F4E4B8 50%, #DAC87F 100%)',
      border: '0.5px solid rgba(139, 115, 70, 0.3)'
    }}>
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-[1px] p-[1px]">
        <div className="bg-gradient-to-br from-yellow-600/20 to-transparent rounded-[1px]"></div>
        <div className="bg-gradient-to-bl from-yellow-600/20 to-transparent rounded-[1px]"></div>
        <div className="bg-gradient-to-tr from-yellow-600/20 to-transparent rounded-[1px]"></div>
        <div className="bg-gradient-to-tl from-yellow-600/20 to-transparent rounded-[1px]"></div>
      </div>
    </div>
    
    {/* Logo VISA en la esquina inferior derecha */}
    <div className="absolute bottom-0.5 right-1 bg-white px-1.5 py-0.5 rounded-sm shadow-sm">
      <svg width="20" height="7" viewBox="0 0 48 16">
        <text x="2" y="12" fill="#1A1F71" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">VISA</text>
      </svg>
    </div>
    
    {/* Texto "Débito" */}
    <div className="absolute bottom-0.5 right-9 text-[7px] text-white font-medium drop-shadow-sm">
      Débito
    </div>
  </div>
);

// Componente de logo VISA normal (azul y amarillo)
const VisaLogo = ({ className = "w-12 h-8" }) => (
  <div className={`${className} flex items-center justify-center`}>
    <svg viewBox="0 0 750 471" className="w-full h-full">
      {/* Fondo blanco */}
      <rect width="750" height="471" fill="white" rx="40"/>
      
      {/* Logo VISA */}
      <g transform="scale(0.85) translate(80, 100)">
        {/* V - Parte azul */}
        <path d="M278.1 334.3L311.2 158.9H364.1L331 334.3H278.1Z" fill="#00579F"/>
        
        {/* V - Parte amarilla (detalle superior) */}
        <path d="M278.1 158.9L311.2 158.9L293.5 247.6L278.1 158.9Z" fill="#FAA61A"/>
        
        {/* I */}
        <path d="M524.3 163.8C513.1 159.2 495.7 154.4 473.7 154.4C423.1 154.4 387.5 179.7 387.3 216.6C387 243.2 412.5 257.9 431.5 266.5C451 275.3 457.6 280.8 457.5 288.4C457.4 300.1 442.6 305.4 428.8 305.4C408.2 305.4 397.1 302.7 380.4 295.4L373.6 292.1L366.3 334.9C379.4 340.9 403.9 346.1 429.4 346.4C483.3 346.4 518.2 321.4 518.5 282.2C518.7 261.3 505.3 245.3 476.5 232.1C459.1 223.8 448.3 218.5 448.4 210.5C448.4 203.3 456.6 195.7 474.8 195.7C490.7 195.4 502.4 199.2 511.3 203.8L515.7 206.1L524.3 163.8Z" fill="#00579F"/>
        
        {/* S */}
        <path d="M661.6 158.9H620.3C607.9 158.9 598.7 162.6 593.1 175.1L506.6 334.3H560.4L571.2 306.1H636.3C637.9 313.6 643.2 334.3 643.2 334.3H691.3L661.6 158.9ZM586.8 268.6C590.1 260.3 603.4 228.9 603.4 228.9C603.2 229.3 608.7 216.5 611.7 209.1L615.8 227.4C615.8 227.4 627.2 279.2 629.7 268.6H586.8Z" fill="#00579F"/>
        
        {/* A */}
        <path d="M232.9 158.9L182.2 280.3L176.9 254.1C167.8 223.1 138.6 189.2 105.9 172.5L153.6 334.1H207.8L289.2 158.9H232.9Z" fill="#00579F"/>
        
        {/* Banda naranja inclinada en la V */}
        <path d="M131.6 158.9H51.1L50.6 162C116.2 177.9 161.9 218.7 181.2 269.8L161.5 175.5C158.3 163.2 149.3 159.2 131.6 158.9Z" fill="#FAA61A"/>
      </g>
    </svg>
  </div>
);
// Logo Plaza Vea reutilizable (mismo tamaño, no rompe layout)
const PlazaVeaLogo = ({ size = "w-10 h-10" }) => (
  <div className={`${size} rounded-full overflow-hidden flex items-center justify-center bg-white`}>
    <img
      src={plazaVeaLogo}
      alt="Plaza Vea"
      className="w-full h-full object-contain"
    />
  </div>
);

export default function OrderConfirmation() {
  const [selectedCard, setSelectedCard] = useState(2); // Cambiar a 2 para mostrar la tarjeta BCP por defecto
  const [showCardModal, setShowCardModal] = useState(false);
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  
  const [savedCards, setSavedCards] = useState([
    {
      id: 0,
      type: 'visa',
      number: '7228',
      holder: 'CARLOS GARCIA',
      expiry: '12/2026'
    },
    {
      id: 1,
      type: 'visa',
      number: '3345',
      holder: 'FACUNDO LLORIS',
      expiry: '10/2026'
    },
    {
      id: 2,
      type: 'visa-debit',
      number: '1108',
      holder: 'FACUNDO LLORIS',
      expiry: '11/2026'
    }
  ]);

  // Estados para el formulario de nueva tarjeta
  const [newCardNumber, setNewCardNumber] = useState('');
  const [newCardHolder, setNewCardHolder] = useState('');
  const [newCardExpiry, setNewCardExpiry] = useState('');
  const [newCardCvv, setNewCardCvv] = useState('');
const [showCompleteFieldsModal, setShowCompleteFieldsModal] = useState(false);
const [showCardSavedModal, setShowCardSavedModal] = useState(false);
const [showGoOrdersModal, setShowGoOrdersModal] = useState(false);

  // Scroll al top cuando se muestra la pantalla de éxito
  useEffect(() => {
    if (orderSuccess) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [orderSuccess]);

  // Función para formatear número de tarjeta
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Función para formatear fecha de expiración
  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 6);
    }
    return v;
  };

  // Función para guardar nueva tarjeta
  const handleSaveNewCard = () => {
  if (!newCardNumber || !newCardHolder || !newCardExpiry || !newCardCvv) {
    setShowCompleteFieldsModal(true);
    return;
  }

  const lastFourDigits = newCardNumber.replace(/\s/g, '').slice(-4);
  const newCard = {
    id: savedCards.length,
    type: 'visa',
    number: lastFourDigits,
    holder: newCardHolder.toUpperCase(),
    expiry: newCardExpiry
  };

  setSavedCards([...savedCards, newCard]);
  setSelectedCard(newCard.id);

  setNewCardNumber('');
  setNewCardHolder('');
  setNewCardExpiry('');
  setNewCardCvv('');

  setShowNewCardForm(false);
  setShowCardModal(false);

  setShowCardSavedModal(true); // 👈 modal verde
};

  // Función para procesar pago con nueva tarjeta
  const handlePayWithNewCard = () => {
  if (!newCardNumber || !newCardHolder || !newCardExpiry || !newCardCvv) {
    setShowCompleteFieldsModal(true);
    return;
  }

  const lastFourDigits = newCardNumber.replace(/\s/g, '').slice(-4);
  const newCard = {
    id: savedCards.length,
    type: 'visa',
    number: lastFourDigits,
    holder: newCardHolder.toUpperCase(),
    expiry: newCardExpiry
  };

  setSavedCards([...savedCards, newCard]);
  setSelectedCard(newCard.id);
  setShowNewCardForm(false);
  setShowCardModal(false);
  setOrderSuccess(true);
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Pantalla de éxito */}
      {orderSuccess ? (
        <div className="min-h-screen bg-white flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-4">
            <div className="max-w-2xl mx-auto flex items-center">
              <button 
                onClick={() => setOrderSuccess(false)}
                className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <h1 className="text-lg font-semibold text-gray-800">Confirmar pedido</h1>
            </div>
          </div>

          {/* Contenido de éxito */}
          <div className="flex-1 flex flex-col items-center justify-start pt-4 px-4 overflow-y-auto">
            <div className="max-w-md w-full text-center space-y-6 pb-6">
              {/* Logo/Icono */}
              <div className="flex justify-center mb-2">
  <PlazaVeaLogo size="w-20 h-20" />
</div>


              {/* Título */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Tu pedido se ha recibido</h2>
                <h2 className="text-xl font-bold text-gray-800">con éxito</h2>
              </div>

              {/* Subtítulo */}
              <p className="text-sm text-gray-500">
                Te avisaremos cuando se haya asignado<br />a un agora shopper.
              </p>

              {/* Progress Steps */}
              <div className="flex items-center justify-center space-x-4 py-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 text-center">Pedido<br />recibido</p>
                </div>

                <div className="flex-1 h-0.5 bg-blue-300 max-w-[60px]">
                  <div className="h-full bg-blue-300 animate-pulse"></div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 text-center">Pago reservado<br />confirmado</p>
                </div>

                <div className="flex-1 h-0.5 bg-gray-300 max-w-[60px]"></div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 text-center">Por asignar<br />agora shopper</p>
                </div>
              </div>

              {/* Resumen */}
              <div className="bg-gray-50 rounded-lg p-4 text-left space-y-3">
                <h3 className="text-base font-semibold text-blue-400 text-center">Resumen</h3>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700">Horario de entrega estimado:</p>
                  <p className="text-sm text-gray-600">Martes 20 set, entre las 11:00 - 12:00 pm</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700">Monto total reservado</p>
                  <p className="text-lg font-bold text-gray-800">S/18.00</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700">Número de pedido</p>
                  <p className="text-sm text-gray-600">AGO0010</p>
                </div>
              </div>

              {/* Nota informativa */}
              <p className="text-xs text-gray-500 px-4">
                Tu pedido puede recibir cambios y el cobro final se hará una vez tu agora shopper confirme todos tus productos
              </p>
            </div>
          </div>

          {/* Botón fijo abajo */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="max-w-md mx-auto">
              <button 
  onClick={() => setShowGoOrdersModal(true)}

                className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition-colors"
              >
                Ir a mis pedidos
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center">
          <button className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Confirmar pedido</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Delivery Banner */}
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-800">Tu pedido será entregado</p>
        </div>

        {/* Delivery Address */}
        <div className="bg-white rounded-lg shadow-sm">
          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800">Mi casa</p>
                <p className="text-xs text-gray-500">Av. Primavera 345, Los Olivos</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0" />
          </button>
        </div>

        {/* Delivery Time */}
        <div className="bg-white rounded-lg shadow-sm">
          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-2 flex-wrap">
                  <p className="text-sm font-semibold text-gray-800">Martes 20 de Sep.</p>
                  <span className="bg-yellow-300 text-yellow-900 text-xs font-semibold px-2 py-0.5 rounded">
                    S/ 4.90
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Entre las 11:00 - 12:00 pm</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0" />
          </button>
        </div>

        {/* Store Section Header */}
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-sm font-medium text-gray-700">Tienda</p>
        </div>

      
{/* Store - Plaza Vea */}
<div className="bg-white rounded-lg shadow-sm">
  <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
    <div className="flex items-center space-x-3">
      
      {/* Logo Plaza Vea */}
      <div className="relative">
        <PlazaVeaLogo size="w-10 h-10" />
        {/* Check amarillo */}
        <svg
          className="w-5 h-5 text-yellow-400 absolute -right-1 -bottom-1 bg-white rounded-full p-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="text-left">
        <p className="text-sm font-semibold text-gray-800">Plaza Vea</p>
        <p className="text-xs text-gray-500">03 productos</p>
      </div>
    </div>

    <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0" />
  </button>
</div>

        {/* Billing Information Header */}
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-sm font-medium text-gray-700">Datos de facturación</p>
        </div>

        {/* Billing Information */}
        <div className="bg-white rounded-lg shadow-sm">
          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-blue-400 font-medium">Si deseas factura para tu compra</p>
                <p className="text-xs text-gray-500">Ingresa tus datos aquí</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0" />
          </button>
        </div>

        {/* Price Summary */}
        <div className="px-4 py-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Costo de envío:</span>
            <span className="text-gray-800">S/ 0.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Costo de servicio:</span>
            <span className="text-gray-800">S/ 0.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Descuentos</span>
            <span className="text-gray-400">S/ -7.00</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-base font-bold text-gray-800">Total</span>
            <span className="text-base font-bold text-gray-800">S/ 18.00</span>
          </div>
        </div>

        {/* Coupon */}
        <div className="bg-white rounded-lg shadow-sm">
          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm text-gray-600">Agrega tu cupón aquí</p>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0" />
          </button>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
          {/* Header con fondo celeste */}
          <div className="bg-blue-50 px-5 py-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Métodos de pago</h2>
            <button 
              onClick={() => setShowCardModal(true)}
              className="text-sm text-cyan-400 font-medium hover:text-cyan-500 underline"
            >
              Cambiar de tarjeta
            </button>
          </div>

          {/* Contenido blanco */}
          <div className="p-5">
            <div className="bg-white border border-gray-300 rounded-xl p-4 mb-5 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  {savedCards[selectedCard].type === 'visa-debit' ? (
                    <BCPCardLogo className="w-16 h-10" />
                  ) : (
                    <VisaLogo className="w-12 h-8" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {savedCards[selectedCard].type === 'visa-debit' ? 'Visa débito oro' : 'Visa'} •••• {savedCards[selectedCard].number}
                  </p>
                  <p className="text-xs text-gray-500">{savedCards[selectedCard].holder} - {savedCards[selectedCard].expiry}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setOrderSuccess(true)}
              className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-colors text-base shadow-sm"
            >
              Pagar
            </button>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-8"></div>
      </div>

      {/* Modal de tarjetas */}
      {showCardModal && !showNewCardForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header del modal */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-lg font-semibold text-gray-800">Mis métodos de pago</h3>
              <button 
                onClick={() => setShowCardModal(false)}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-4 pt-6">
              <p className="text-sm text-gray-500 mb-4">Tarjetas guardadas {savedCards.length.toString().padStart(2, '0')}</p>

              {/* Lista de tarjetas */}
              <div className="space-y-3 py-1">
                {savedCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => {
                      setSelectedCard(card.id);
                    }}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      selectedCard === card.id 
                        ? 'border-blue-400 bg-blue-50' 
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {/* Logo de la tarjeta */}
                        <div className="flex-shrink-0">
                          {card.type === 'visa-debit' ? (
                            <BCPCardLogo className="w-14 h-9" />
                          ) : (
                            <VisaLogo className="w-12 h-8" />
                          )}
                        </div>
                        
                        {/* Información de la tarjeta */}
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-800">
                            {card.type === 'visa-debit' ? 'Visa débito oro' : 'Visa'} •••• {card.number}
                          </p>
                          <p className="text-xs text-gray-500">{card.holder} - {card.expiry}</p>
                        </div>
                      </div>

                      {/* Radio button */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedCard === card.id 
                          ? 'border-blue-400' 
                          : 'border-gray-300'
                      }`}>
                        {selectedCard === card.id && (
                          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Botón agregar nueva tarjeta */}
              <button 
                onClick={() => setShowNewCardForm(true)}
                className="w-full mt-4 py-3 text-cyan-400 font-medium text-sm hover:text-cyan-500 transition-colors underline"
              >
                Agregar nueva tarjeta
              </button>

              {/* Botón Pagar */}
              <button 
                onClick={() => {
                  setShowCardModal(false);
                  setOrderSuccess(true);
                }}
                className="w-full mt-4 mb-2 bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-colors text-base shadow-sm"
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de nueva tarjeta */}
      {showNewCardForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header del modal */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-lg font-semibold text-gray-800">Mis métodos de pago</h3>
              <button 
                onClick={() => {
                  setShowNewCardForm(false);
                  setNewCardNumber('');
                  setNewCardHolder('');
                  setNewCardExpiry('');
                  setNewCardCvv('');
                }}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-4 pt-6">
              <p className="text-sm text-gray-500 mb-4">Tarjetas guardadas {savedCards.length.toString().padStart(2, '0')}</p>

              {/* Lista de tarjetas */}
              <div className="space-y-3 mb-6 py-1">
                {savedCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => {
                      setSelectedCard(card.id);
                      setShowNewCardForm(false);
                      setShowCardModal(false);
                    }}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      selectedCard === card.id 
                        ? 'border-blue-400 bg-blue-50' 
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {/* Logo de la tarjeta */}
                        <div className="flex-shrink-0">
                          {card.type === 'visa-debit' ? (
                            <BCPCardLogo className="w-14 h-9" />
                          ) : (
                            <VisaLogo className="w-12 h-8" />
                          )}
                        </div>
                        
                        {/* Información de la tarjeta */}
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-800">
                            {card.type === 'visa-debit' ? 'Visa débito oro' : 'Visa'} •••• {card.number}
                          </p>
                          <p className="text-xs text-gray-500">{card.holder} - {card.expiry}</p>
                        </div>
                      </div>

                      {/* Radio button */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedCard === card.id 
                          ? 'border-blue-400' 
                          : 'border-gray-300'
                      }`}>
                        {selectedCard === card.id && (
                          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Formulario de nueva tarjeta */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-base font-semibold text-gray-800 mb-4">Pagar con nueva tarjeta</h4>
                
                <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  {/* Número de tarjeta */}
                  <div className="relative">
                    <input
  type="tel"
  placeholder="Número de tarjeta"
  value={newCardNumber}
  onChange={(e) => setNewCardNumber(formatCardNumber(e.target.value))}
  onFocus={(e) => e.target.removeAttribute('readonly')}
  maxLength="19"
  autoComplete="new-password"
  readOnly
  name="fake-card-number"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
 />

                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="5" width="20" height="14" rx="2"/>
                      <path d="M2 10h20"/>
                    </svg>
                  </div>

                  {/* Nombre en la tarjeta */}
                 <input
  type="text"
  placeholder="Nombre en la tarjeta"
  value={newCardHolder}
  onChange={(e) => setNewCardHolder(e.target.value)}
  onFocus={(e) => e.target.removeAttribute('readonly')}
  autoComplete="new-password"
  readOnly
  name="fake-card-name"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
/>


                  {/* Expiración y CVV */}
                  <div className="grid grid-cols-2 gap-3">
                    <input
  type="tel"
  placeholder="Expiración"
  value={newCardExpiry}
  onChange={(e) => setNewCardExpiry(formatExpiry(e.target.value))}
  onFocus={(e) => e.target.removeAttribute('readonly')}
  maxLength="7"
  autoComplete="new-password"
  readOnly
  name="fake-exp"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
/>
<input
  type="tel"
  placeholder="CVV"
  value={newCardCvv}
  onChange={(e) => setNewCardCvv(e.target.value.replace(/\D/g, ''))}
  onFocus={(e) => e.target.removeAttribute('readonly')}
  maxLength="4"
  autoComplete="new-password"
  readOnly
  name="fake-cvv"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
/>

                    
                  </div>
                </div>
                </form>
              </div>

              {/* Botón Guardar tarjeta */}
              <button 
                onClick={handleSaveNewCard}
                className="w-full mt-4 py-3 text-cyan-400 font-medium text-sm hover:text-cyan-500 transition-colors underline"
              >
                Guardar tarjeta
              </button>

              {/* Botón Pagar */}
              <button 
                onClick={handlePayWithNewCard}
                className="w-full mt-2 mb-2 bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-colors text-base shadow-sm"
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      )}
        </>
      )}
      {showCompleteFieldsModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
    <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-xl">
      <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
        ⚠️
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Completa la información
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Por favor completa todos los campos requeridos antes de continuar.
      </p>
      <button
        onClick={() => setShowCompleteFieldsModal(false)}
        className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500"
      >
        Entendido
      </button>
    </div>
  </div>
)}
{showCardSavedModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
    <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-xl">
      <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
        ✅
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        ¡Guardado exitosamente!
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Tu tarjeta ha sido registrada correctamente y está lista para usar.
      </p>
      <button
        onClick={() => setShowCardSavedModal(false)}
        className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-emerald-500 to-green-500"
      >
        Continuar
      </button>
    </div>
  </div>
)}
{showGoOrdersModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
    <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-xl">
      <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
        📦
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Ir a mis pedidos
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Serás redirigido a la página de seguimiento de tus órdenes activas.
      </p>
      <button
        onClick={() => setShowGoOrdersModal(false)}
        className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500"
      >
        Continuar
      </button>
    </div>
  </div>
)}

    </div>
  );
}