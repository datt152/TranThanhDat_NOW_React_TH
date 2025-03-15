
    import React, { useState, useEffect } from 'react';
    import './main.css'
    import Card from '../Card';
    export default function Main() {
        const [data, setData] = useState([]);
        var url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
        useEffect(() => {
            fetch(url).then((res)=>{
                return res.json();
            }).then((data)=>{
                setData(data.meals);
            });
        },[]) 
        return (
            <div id='main'>
               <ul className="p-5 flex">
  <li className="mt-5">Home</li>
  <li className="mt-5 ml-5 text-pink-500">Your Recipe Box</li>
</ul>

                <div className='m-1.5'>
                    <h2 className='font-medium text-2xl'>Emma Gonzale's Recipe Box </h2>
                </div>
                <div id='content'>

                    <div id='left' className='w-40 h-40'> < img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASERUQEBAVFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0lHR8tKy0tLS0tLS0tLS0tKystLS0tKy0tLSstLSstLS0rNystLSstLS0tLS0tLTcrLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQYHAgMFBAj/xABEEAACAQICBgYGBwcDBAMAAAAAAQIDEQQhBRIxQVFxBmGBkaGxBxMiMsHwFEJSYnLR4SMzNHOCkrJTs8IlQ6KjFRYX/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECBAMF/8QAIBEBAQACAwEBAQEBAQAAAAAAAAECEQMhMRJBMlFhBP/aAAwDAQACEQMRAD8An1LYuS8jMwpe6uS8jM0yaGIYAMQwhjEADGIYDAQAMYgAYCGAAAAAAIBiAAAQCAGIACkIYgAAGBppbFyXkZo10ti5LyMwGMQAZDMRhDGIAMkAhgMxlUSNdaokrtpJbW9iXEj+P6TYWEnHXcrbo56z63wJbpqTaQfSohTxcG7J58Hk/HacPD9IqUldJr+2y6rJnN0n0ggrzgs45N5Wd2stu1fHeT6X5TRyNcK6btfbs6+XEgP/ANmlO6lUcZRveLVrauclZ7rZ3/I4ON6WyV0pb7Raup2XGXdlcfR8/wDVw3AiGhel9OpSjKUk5WSld2lez7M7cTr0ekeGe2qovepZW/Tr2F+oz812ANdOrGSvFpp7Gndd5ncqABAACAAAQAFAgAAAQwNNLYuS8jMwp+6uS8jMBgAAMYhgAxDCA8+OxkKUJVKklGMVdtnobKm9J2n3UqrCwl7EM5pbHJ7E+S8yW6WTbwdJ+mVTEycYtxpJ5R3y4OX5EZnjZcfnieepM0pGNN7dBaRnvk+82R0o11245pco7DnQptm/6M7Zl3o1t68TpepO2s7tKUb2s2pLVd2tuV+85k6l3zNjpM1ThYbTTbQxEo7G/nYdGjpWexvq7HtTWxrqOPYyjJks2sukm0D0nxGEqKUZOVO/tQexx6uD6y5tB6YpYqkqtJ5Panti96Z880qi3kw9Hul5UsVGm/dnKzV9ks7Pz8OBcejLtc4giBt5gQxAAAIKBDEAAAAa6Wxcl5GZhS2LkvIyAYxDCAYAADEMDxaYxqo0alWWyEXLuR894mvKpOU5O8pNyb63mXJ6Sq7jgpq9ruK53a/UpYzfW541zRspQHOOfK3kevDUvNGbWpNt+Ew15JfPzmdCWE+rba8+S3G7RFJXvb5+Udijh16zPcrvvT8zwuTpxw6R6pgd1tsreC/NnM0jh7Nkw9StdX4yk+rJHEx+Fu0t8mvH9C45dmfH0jtSk+G7M1JEjxmBvWlH7r77ZHDlSPWZbc+WOmux7tG4hwqxqLanGXarM82p895lh9vzuKy+idHYmNSnCpF3UoqS5NXPURP0b4zXwai3nTnKHY3rL/LwJWek8YvoABBAIAABAAUAK4Aa6XurkvIzMKWxcl5GYDAQwGAhhDAQAQT0tVWsLTj9qqr9kZMqeKuWn6Xf3FH+ZL/BlUxkYvrc8ehK7Z7sM0sjn0HdnTWDm1dRZivTHbq6PqJSVuHwOthH7UuCvfsv8CLUMLUTVrpq/gdfA4qUE4y2yf6v56zyykdGGX+x74T1pS7u358jZPAXestyTXK+3tse3QmB14a7WTWtzzvb54HUlqxUrK9suOxLLzMyPS2IhWivXRe9xbfb+lzhYrD6smmt78dh09JV6yqazp6ttmW7YzwaWjJ/tc91+e09cZpz53bn2VxQp2fYa41MzONXNdSz72ejxWN6KMR7VeHFQl3OSfmixirvRX/EVP5T/wA4FoG54876YgAqAQxAAhiCgAADXS2LkvIzMKWxcl5GYAMQwAAABgAgIP6WaOthaT4V4rslCa87FPPaWn6XNIOMaNDc26j5xaUf+XeVxgaClV1d2fgZyXH/AB7NG4KTjrNZfqdd4ibepGDlZPLZsV+87WhcLHU1bHuhoaKnrx38LrxRzfW727ZhqdOR0Xxnr6mp6ht6rbSz9lLOTukuG97j16VwlODhUjnGV1ys849T4khwmBjC+rFJy9573ze84mnopWjFWV23bi8iZa/G8fr9qV6LhF0Fq2WStyNCpKEW5bFtfFhoOX7CPI9coayte2/Iz6viG6Q0zhvWSjUi045v2JOyt9ay2HrweCw9aE4RWTeSV1a8VlZ8GdSt0ao1anrasdaWW3Y7bLreer/4tetdW+bVnZJXts2G7JJ0xLbe/FTac0HUoN3V43dnyOQmXhpTAwqQ1Zq5TGlMLqVZ01um4rvPTDLfTw5cZO4sH0T07yqztkqcF2zlOXlFd5ZRXnonxEHHEQT9rXjK33FFQT714lhHu5jAQAAAIKAAAABABhS2LkvIzMKWxcl5GQDGIAGAAAAAAVj6YsM70Ku604PnlJeb7iAaKqWrRvvuvAvTpXoKOMw7ouWq7qUZWvqyXVybXaVDhuimM+kTpqhN+plnK1otJ+y4t5Svty3GcouN7SjQtXOxJ6DIdgG4yzJPg62RxXqvpY9x1L2RDNLV9eo0uJLMRP2HyIbTX7TXls1reJTSbaHhakl1HtoK7FgtXUVnuM8KvaNa8Zt9elQB0zZcxnI3Xm52OdkyksbU1685X2yqSXi18C4ekFdxozktqi7c7ZFKRi21ZNvZks7svD7a8+fyROPRJSf0mpJbFSs+blG3ky2CKej3Qjw2G1pq1SraUlvS+qvN9pKjocpgIApiAAAQxAAAARrpbFyXkZmFLYuS8jMKYCGADEADAQAMxsMAisdOUfVYqpHdray5S9r4npweJPd0+wTUoV0smtSXNZx8L9xHcLWOPkx1Xfw5biXU6t4nOxejadRpW2vPrNP0lqDazsr9m88C0zUbXq4Xz3mI95N9JphcBCEfV3k1q/Wd8uB6sJRjDKKSXBZJcluI9htMylaSpS1rWtnqrtOngdKxk9WS1JfZe/8ADxNSxnLDKTt2tY1zZjGRhVmW15yPNPCRrPUl7tszmYLorhKWOjOFN3VJ1PabaU9eKUknvzkSDR0MnLjs5I14L2q1apuWpSj/AEJylb+qo1/SdHFjqbcvNlvLToIBDPR5GAhgAAACAAAAAANdL3VyXkZGFL3VyXkZgMBDAYCGAAAAAAICMekGdsNH+ZH/ABkV9Sq7yc+kar+ypQ41G+yMWv8AkiBTpNZnPy/06eL+UgwNRSi0957cDoaO4j2i8VaVmTjRs00jws7dWOfW4eF0bb5Z0KOChF3td9eZvpSRnKSNa0mXJll6wk7GujH1krXyWb5GitVbdl3no0RF3m/wrzLhN5aefJbMbXtxNaNOnKb2Qi5dkVe3gatF0HClCMvetrT65yetN97Zq0xnCNP/AFKkIdl9ea/thI952OExmKGAwAAGIAAAAAAAADTS2LkvIzMKWxcl5GVwMgEMBgIYDAQABpxeJhThKpN2jFNt9SNspFddNOkcK8qeEpO8JVYKct0lrJWXVn4BHt6V0ZV4RrRvaMndcFO1n4JdpxKeEvHYTbRyUk4yV1LJrdZnhxuivVSyzi/dfwfWjm5sb66+DKfzUEr4ZxkSDQ8qtslftNmkMDfNG7QktSVmsjx+nRMe3aoSqWzjbtPRFyeTCM0zbCyzGzRalkb6U3SoTrNZXUv6I5Sa7NZmWj8M67usqe+X2uqHV193V7ekKjHDVcrRVKeXUos6ODj7+q5f/RyTXzHNrzU69BJ3SjUqrsUYRf8A7WdErfot0i1JRVW7jGCprqTld+SJ/hcfSqe5OLa2q+a7Np0ac0r1IYkxkUwAAAAABiAAAAAI0Uti5LyMka6excl5GYVkMxMKtaMVeUklxbsEbQucPG9J8NT+s5P7q+LIvpPp5UvalFR8X3vIujawqtaMVeTSXFtJd5xsd0pw1PZLXf3dnfw6yscXpitVd6k3J8G3ZHPrYu/5sJtJuk/TKrVXq6fsQe2zzfU3w6iL6Pm5V6b4Tj/keOrNs9mg43rQX34+ZP1VvaJO6qUZx1JLJ+D4o4ejckdyhIujekf0no9wdn2Pijw0qSTJpilTlTaqtKKV3JtJR67vYVrpbS0dbUoV6M03ZSjWp2z4pyujk5OGy9O7i55Z367lfSVOks3d7orNt8EdbRGhala1XFLVjtjR+NTjy7zydCNC0bfSXVhXqX2xalGm96X3usm0T04+H9yePLz/AJiEklZbCJekfFungqlnnNxp9kn7XgmSyTK39LeNWrRoLi6j7Fqx85HS5Vd0JZ24+Z2Kc2rNSaa2SW2L6+p8CPvI9eHxlnmsmrP8yJYmOA6U16fs1LS6nsa4xl8CQ4Hpbh55SvB9ezvK4q1rLitv5NHjr196lfwf6lJau+hiYTzhNS5M3FIYTTFSGyTXJtEp0R0yqLKcr/iz8dpNNbWMBwcN0lg1eUbdazOrhsfSn7s03wvn3E0u3pASYyAAQBXmp7FyXkaMbpGlRV6tRRvsTeb5LeboP2VyXkU50i0y61epPWunNqPVCN1FLq39oSprpbpj9Wjl955vsWxEP0hpypOXtScnxbbOHPEye816xdpp662Mk955XUzzYma5RuQbZTE5miLezb8OZmwokzr9FIp4qkvvI453Ohv8ZR/H8GWel8WxRjYekdLU8NRlXrO0Y8PelJ7IRW9v9diPTSoOWS7WcHpjolV6bjJ5JWj917dbm9/cUVx0l6WV8bK03q0k/ZpJ+yuDl9uXW+xI4Ta4DxWHlSqOnLbF2/UEYV0dA6axGEqqth56ry1o7YTX2Zx3rxW4vzon0kpY6h62n7MllUpt3cJcOtPanvPnalTcpKEU3KTSiltbeSS6y3uifRirgFGrGWtVkl61fVa+wuKXHjn1GolWHIpz0oVdbGtX92MI9urrf8i3qFZTipR/VPemUr6RZ/8AUKy4Sj/sUjTKNSFmEhEGyNZ7PntRrknt28vyAcXYDC4Rm0zZKzV/nuNTIrpYXSU45XdjoUdJy3PPbtzT6mR65mpsu00nnRvpRKM4RqNuMrRlfc9ikWImUJQrbO3zLe6HaV+kYaLb9uHsT5rY+1W8SVY7tgARFR/pNjvU4KrUTzVO0fxSWrHxZSnD54Fl+k3F6uFp0l/3Jpv8MFfzcStNy5gNMcRIyQQmxLMU/wAx02ANCM2jEKxZ3OhsksXRb2a/wZw2dXo7PVr05PdJCFX3o13p3ta98jm6Up3TR1MGtWlFdSOTpGsldm0VH04wdpKquOo/Fr4kapz3Ep6b4679StrlrS5LYu/yIoveMX1pZnom0HF6+Nmk2m6dJZOzt7c+edu/iWdqb0VT6K9ORpznhJuyqPXpv79rSj2pJrk+JbdOSsbnjLQ7x9qO3et0v16ylOmmLjUx9acXk59uUIRd+2LLrqTUU5N2UU231LaUJpa7rOTVte9S29a8nK3c/AlHmbFcbEADCIbyAmzFocgKjFGVgiNvLsIHRdo+PeyV+j7Sfq8T6tv2aq1erWWcH5rtIvbJIdOpKLUou0otNPg07p96Avm4EF//AEaH+kwIqOek3Fa1elS3QpJ9s3n4RiRL6p1+mdbWxtXPY4x/thFedzkQ2NdTItCMka4m0qNbFS+ewdhU9/MK2iGmIDBnW6Nw1sRRj9qrTT7ZI5LOp0enq4mg+Fak/wDziWelX5iZ2ViMaYr5M72NqbSGdJcTq05PqZaRWWlq/rK85feaXKOXw8TwN+0btvmaavvGFeqjUaalF2ad01tTTya7S++i2lfpOGp1d8orW6prKS70ygKZaPoox16VSi37k9ZfhmvzjLvNYpUu6SVL0fUrbWlqPqppa1V/2px5yRUHSiS+lO32V8S3KlJ1K1R/6dFRj+KrKUpeEKZTmnJN4md91l3FqR5LAA0AkPeK+ZkgMZPMEx/O4SIgSHJbuLS8cxpCe1d/dl8QNgmO4FC1V1AZezwAg19If4qt/Ml5nhpfmMDMarXDYblsAClazGntYABuBCAIxe86Gh/31P8AmQ/yiAFhfF5Yv3X2kC6X/uZ/hfkwA1SK5NNX3hgYaZQJ96Kf31X8EPOQAWepVj6O/eV+dL/bRTPSH+MrfjkAGqkeGWwAAgxMtz5fkAApcPngZIACDh2+RhHb89QABtQ0ABGAAAV//9k=" alt="" className='w-40 h-40 rounded-full max-w-none' /></div>
                    <div id='right'>
                        <div>
                            <p className='text-justify'><strong>Emma Gonzalez</strong> is a deputy editor at Chefity, bringing her expertise as a former cooking editor at The Los Angeles Times She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.</p>
                        </div>
                        <div>
                            <button>6.5 Subscribe</button>
                            <button id='share' className='text-teal-100 rounded-1xl m-5 bg-pink-500 w-19 p-1.5 rounded '>Share</button>
                        </div>
                    </div>
                </div>

                <hr className='mt-5'/>
                <div className='mt-5'>
  <ul className="flex flex-wrap gap-6 justify-center">
    {data.map((item) => (
      <li key={item.idMeal} className="list-none">
        <Card value={item} />
      </li>
    ))}
  </ul>
</div>

                
            
            </div>
        )
    }