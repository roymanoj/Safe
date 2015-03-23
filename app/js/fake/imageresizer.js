define(['jquery'], function ($) {

  'use strict';

  return {
    /* jslint unused: false */
    resize: function (imageBase64, width, height) {
      var deferred = $.Deferred();

      var resizedImageBase64 =
        'iVBORw0KGgoAAAANSUhEUgAAACoAAAAUCAIAAAB00TjRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAABntJREFUSMfFlltsXEcZx+d2rrvnnF2vvU7WGzv1JTZJHSeo4SJVpEoRVZMmQpF4KFRCgFCAqoISURGpAsFbHyCRKpSKh0IkLi+lKFBUEWhEColwkiq4abK4tvc4Xttr733PZc/ZOWdmeFg1LU1TCC/M42i++X3/b77LQCEE+P8t8r+ZCSHAnX7/+w6EECD04ffAe1LfOwwhvIfznEOEwF1MyD2xe2AeRZ1G06vVOrV65DggCLgAiDMt8ADtcs6lZNLM55Nj4zC/DWAMhACcf2AkyH9J7klubWwslUoLhcLy4mJlY9N33U6r6QRBrl55OPJvJtOerJgDA7qiMqdtMbZ7W/7+T38m+dmjQNc/0IP/FHwhBAAQQk7p4lvXl1bXYoRkWaaUMs6zAwMXLl364+/OfrVT//vknhUzPWwae2Z2p1IpWVF++9JLWjccsouPWsbe7/9Q7NkL7/CA3FUuAADCnuig3b755tx62+nLZjVNgwgRQiCEYRheX1g6Urml7ZrelRvMr6x0+9O35uereuLgY4cmxyfcIFAeOvDqfGHzW08d+N4PpAMPA8YgxndR38vndxyMOWdxHDjtzfXyar1BXS/2/dB1Q8+J43ijXLZXV8ySPbq5erLe2acTmjDHHzloZfpBGN6X29pcX/eazUEjqfRlSn+98HkEBp87iWdm3vsKd+AhZJx3NiqdcjlsNGLXizwfRRQ4rWqpVKlstquVsF7lXsugXpbgoUTykuNfazaHjdSAqm7T1SRCMoSIc0yIJMmKJGNMVCu13KjLYx8Z/+4Ja2K8B3o/vhOG3StXa394pWnbvtPqek6347HAbfj+ApJxKt3vNtOAYwiSqi6ribjjD5umme7XJSyrmsA4hhBgLDBUNH3JXuBcjE3txKpaLC6W/vHG+GAumx7QvnTMPHq0F4N38QFj1TNn0C/PVIeH/XoV/XOOSiigoS3Qr5GV3r33/k89NHT2Fx9dLvRv30ETZpPDQQm5NCYSlOIuoAGPujyiIo4EiwBjgjHOAYEiZrwd49EtW+eY2Gi1jhx4ZPDHpyHBQAgCABCcQ4RaNwvOn89BQ0fZrN6sglQmiGjoOkF+NDG8y4R8X3lpa702PLX396538upb9bA7LuipB6bjtuutLRJZ4QIACASAEEIAIYKQQ8Qg6AKyLbPlN+XNH4VSPQjP/ezFFyYmMk99BwoBBecAwrBaaT9/anWp2KJd5ro0jiljgdvUOCWE0FTGYlGeiWQq/Ze1+adtN5PLKUKUvM5Mc/25HTm/VVcJYlyIdzojAAABwCGCMU3kpgRCx0qbgZmxdG3pzbmf7P/Y5145LzgngnOIcbO08refP58fHOgjWJIkggkiUqSDLkMAITlyoSSjpFENN18sN7ZunxpKG2YqndqsFDvujdXVCUOLaSTebfYQQAgggBAyhBUVzTUa1Mw8/fVjjuefKhaXlQQAgAtBejUgjdz3TWa0rt3SCUacYSAQEH39WYax4/m58bFcc/VZ5DQi5siDZkJ9/AtPjI6NvXD6tL2yUqH+MJI6qskhYgiHMQtiFgkQcUEj3uHy0M3CLOVkYsuyveyFoSxJ2U882Cs00qsBFaHtmCwwrkiSpKkxYwJAKABotrIQKEvFB/oMJ8bX235Nj0cxee38+dnLV1rtNsbo7UZH1awShQCCDg2sTMbKZpCsyImEput9lnXj7YVfnfvTx2e0G4VCJwi+/cwzX3zySQAAJoRAhAAAyXT6p2fPijh69sSJV187P6Br3TAgRuIbX/nycqHgNpt2HFfNkZJWW51ffHD//lqtbtv2jsnJ4Xx+ciinyvLcyy9fuHLV0PWvPf6EOTzChJAURVYULZHYue+TyhvXLr7++mOHDyuyPLVzp9/pCCEURYGu61JKwzBknMeMz16ePX78+HqpBAB49MiRQ4cPl0qlWr3utNoIQtsuXr54MZvNHjx0iBByeXa2aNuyqvq+H8cxiyJJlgVjQghFlhVF0TRN17RUOtU/kAUQpixrbGxsenp6ZGRkaGjINE24sbHhOE65XLZtu1gs1uv1dqu1trYWBIHneZVKRQjRS2bBuaIoCcNgjFmWlc1mNU3r6+szDSOVSpmWaVmpZCJhmKZhGIlEQtd1VVVVVZVlGWOsKIokSb2RffvH8P6JJ4SIoogxRimllHLO4zjmnAMAEEIYY4SQJEkIY4kQRVHwe+bHh39SboMghLfx/wLg1oT6h+nc9AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wMS0xN1QwODoxMjo1Mi0wNTowMD3Ny5MAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDEtMTdUMDg6MTI6NTItMDU6MDBMkHMvAAAAAElFTkSuQmCC';

      deferred.resolve({
        imageData: resizedImageBase64
      });

      return deferred.promise();
    }
  };
});