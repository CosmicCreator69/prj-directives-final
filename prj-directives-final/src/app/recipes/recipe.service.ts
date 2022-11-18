import { InjectableCompiler } from "@angular/compiler/src/injectable_compiler";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@InjectableCompiler()
export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'data:image/jpeg;base64,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',
     [new Ingredient('meat',1),
     new Ingredient('French Fries', 20)
     ]),

    new Recipe('Big Fat Burger',
     'What else you need to say?',
     'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBMXFxYYGSAcGRkZGh8cHB0cHxkiHx8fIBkcIioiGRwnHxgcIzQkJyswMTExHCE2OzYwOiowMS4BCwsLDw4PHRERHTAnIigwMjI4MjozMDAyMDgwMDA1MDAzMjMyMDIyMjAwMDg1MjIwMDAyLjAwMDAyMDAwMDAwMP/AABEIAPMA0AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABQMEBgIBB//EAEAQAAEDAgUBBgMGBQMCBwEAAAECAxEAIQQFEjFBUQYTImFxgTKRoRRCscHh8AcjUtHxFWJygpIkM0NTY6KyFv/EABoBAAIDAQEAAAAAAAAAAAAAAAADAQIEBQb/xAAxEQACAgEDAwEHAgYDAAAAAAAAAQIRAwQhMRJBURMFFCIyYXGRQoFSobHB0fAV4fH/2gAMAwEAAhEDEQA/APs1FFFABRRRQAUUUUAFFFcKWAJJgedAHtFKMwz9tJ0oWlSwJIBBIHz3pE3n2KeKVoSEIJjSoiVdYi6TF7qrPPUwi65f0HRwTkr4Rs1LA3IHrUDmObAkrAH7+YrDjOHA86HCChN0o3Uqwga/r0qsxm2IU5CRIUTpbN4n/dzF7WrPLXxukh60cqts2WO7T4Zswp5Gr+kEFXuPu+9DvaRgEDUJIm6ki3zvvWQXlWGQ4UuJQZGopKIcUqYJ1Teel5vWZOXpQ66HWlJUZLKAqNRUohIOmNIFunNVlq5W6otHSwfk+sDPG97kRIIgyJiQJmPOvGO0LS50SSN5gR68j5V89yd97DqCMUUwU+BSjrCY2AAMp9Z6dKu4vPdTPeBQSsKKSkAypJ8JJKuIAPO9Hvkkt6sPdE3twb5OZN2lYE7TImek71MnFoInWn5ivmf+tONd0hwLSlShpJEIg2mdiIN4q5mbwacQ2l8N96QJQQdM7EJVMAnzq0dbLuiJaRJ7M+hoeSdiD6GpKxuHU8NSdaNQNl7qkbBSSQRO9id6YM5u6jSlwSTuSLAg3uBxT46mPdUIlgf6XZoqKo4PM0rtcH5j5/3ir1aIyUlaEtNOme0UUVJAUUUUAFFFFABRRRQB5QaKT4zGqVITIB22Ej8apOagrZaMXJ0ixjMzSkEJ8Sr7cf3pCp5b2mTpSbqgmSkXE9bxVhpCzqm0zI9Bt+VSrwokKT96NR8gLD8K5uTLPJuuPHk2whGH38lB9hepSrpnSFbSokwL+XSunWe7bc7skgSkjYJMfFPSOnT5XnGLj0v+X4mh5rZJ2Vf5Uhxdt0M6+EITg9RTCQngJFh+pow+CSVQSUgSJAm4p4cPUb+G20j1/Sk+k+WO9XshLmLRStISP5Zuepg7g7pkCqwy5BWo6VEEeAbnVeZV02+taB3CHQRyfu+XW+1UWxeZM/sVaUafxIiM7WwndywLbSnu5eOxk8EzINjYbiocDljZASpEqSqXFFRACb2CRxa9PmsJcaRsZ3j1vwTP1qs5hgFHRMHY7GDwaiqp0X6rtWJs1wykrLYs1OpIuQJHBPympMY+XHkOtoTrCQCkJnUQImPMWphimioAG8CB5frXWXsBCVykEmIPKYPFVbuTS2RZV02+SbFYcphaEtqKkgq+6Ur2meOLeXnUrOM0eN5QIUBCvvJXyBA2n51EwoEysyep/e9C0NrIQq/iEcj9nam9fdCunsxu0oNnxT47JISYEi+o3EeZim2Ce0gJNxsCL3G4+lJWXz36GwSUgFJI22sfbrThGFTAH9NwefnzNdHBJ712MOZLaxnRVbDvX0HcDfgjrVmtplCiiigAooooAK8oqtiMa2gwpQB8/wB2qspKKtgVc4fIToSYkXPltHv+Rqjh8LzJJ5r1GJSoklSZJmJBPkKvttc7Vhk/Wla3SNcX0RruQoTAPyqQADyECKgxeObB0d4NUfDNz7UkezJK9SSvxI3iQB03386z59RDAvLIuxzica0lRJWJ5H51Rcz9kdT0/wA1ic8YLklDikqvBBA+m1KGOz+IfUhpzFylMmEptYT8U3PmRWeOrU03aj+1ltkuGb7F9rWkmyVnqADb5Coz2nSbSBYGbkCRMHaDWffykJaU2jEqAAOtYGpQm0gzaOoHy4QPYB5xICMW24EkWKQCVH4pKTE+ahzvaaVHK579f8n/AIFvLJPg3Oa9pS22pxWkjuyqxuQkT1vYGk+XdtkOoJQk73UUwlJ3OpZsBzSHJMocQtS3V6ld2UFoJkJ1HxBW4Nh0i/NVs0ebbhtLZESENgGBMkqJ2G5M1ak3VuT89iFmkhxjO3SgpWhKVgGxmJHJgjk03yLtS2/YKSlRmErsTAEmff6GvnOO+zhvVOtQFygWmfoKVZYtS1ExCEkFZsImwJ61rhgTje+3klZ5H2ZecthUHi1uTUmXZi26vRq0n+kiP818qezbEkJXAJKiNZ+OD4heYiCYMbDyqyM2GvWTN4SobwL/AE29ao8LW9WOhnvZn19WAPEGufs+kEQJ4NY/IO25PhWva0qEj/uFx8jTDMHcfiBLSmw3/wDCoKn3MK/Chwh2TvwXWV92aLLl6THW09L3rQ4Z28eU184wGGxbZAW7bopH581rMtcMXWJ5ItU6fO4Ppopl6Z72aLUNST7ex/UCrNKFYoBUn/b7wQaYsYlKvhM/Q/I11o5Iy4Mko0T0UUUwoFFFFAEGMd0oUroLevH1rIYxKlKJKpJ55/xWvxbWpJT1rOZjhi2fFF5II5A3t1uK5PtSE5QTXC5G42v3FeGSlNyQFcT18p5pfnmbYpDchxZ1WSlMSbf1RYedSPYdSnAqTuYE/lxU5xyVHwK8LVtXGrkg9OJ9a4mnlJcNpf1NuHE5vgU5JkgS4l551S3RJSlAIQkkEEyfjVeJpu5ggEEIbJm5MHVPrXgzZlqFa1KIEaQAU9bTEQefpUa8+U4QW0O28wlMdNo85mtko45K8jNS0/xWo/uzO5gyqSAmCN59aWstOtnUhwpBkfCYPWL+fHWtO+VrusJPqZ//ACN/fiqS8PYgqn0FZ45Yx2T2Nbx6evir8lVONeWBo8LlvEBY/wDIHeaMyyRsqC/syUqjdBiTzBAsJ4q3hHUtKHhkTPnHXpNeZx2mTMBtUbTG97c2kU+CXT8D3+giWHC5rZV9xfjMc/pSkADTHi3MDgk7+u9cHMzACmUE7T14qB3PUTM/MbVA3mTZIlQj6/5oWN18oyWl0z7I5K8OkyvDCDwiBv5xQcVhQZRhABBBGxg/0rSZSfTpfpXGKzJChHh9YvUTeJTO49xWiNrff8szvSYb2NB2aZwpKEhPhghSXSgkT6pCVC/rfajtJl+XraC9CFEjwhohtYPHhSIvzqFVMJiMOdyPmqfqmPrXLyUOKhtQgD7ygkD5+dL6JqfWm1v5KLRY2+XRlGcE4hBAEzeCNUHqORXQzUtgFpS21zfSsi49IPzrQ4Nod4lJ2JgkGRHqDepM8yNAVJCVSTpPl69K1LPb+JFMmh7Y3+f8kvZbtViVuHW7I0zpUdQO3CvfatEvPXIlKUxvYWEcWNqyuVMICwktADhQkQfbetcns8SoLQ6FIEWkj5xO9YNRkfXtaRinhyQ+ZUWMB2wQtMLbPQwbUxZcL62w0CUwYUFgp87WM29qU52wlCkstBooSUqKk8/7T0/QV9ByrCpQ2iEhJ0i20TfatGnxT1EnGTpKrX/YpyZ3lrS0oAcMqHv9eatUUV3YrpSSFntFFFWA5NZDty8p5pTWHWQ4QQFgGEzF5G532rRZy4Q0qPIH0Jv9Kz6lNpTrUtAPAJ39qxarN0/BXKsdihe4uGFltCVhltQuosoKNR0xcFSiet+QKqOYTDtpKdJVJmCSBPtU+PzppSw224km0hPJ9uPWkD2OccBUhKEJBIKnVAQQY+Gdrda404582R9MdvNHSxJwjVtDAuIElLaUx5CfnvVJ3NwToSoFZ2A8RHsNveKQ5tjGhp7zF97vrQ2CUjy8MA/Or+T5mgI7xvDJQhMDU5usxsECVHrJI234q69nqPxZXf2Gdd97PF5mqCUSqCJG29Vftryz4EKN9xJE9LCtf2fxjLra9LSW3NwFAQrkGx28qgfwmHaJdLpcXqC0oK1BCY4SkG6Zveem1UWXBFuKx7/ljOuC/SIHMlxalaVNz18QEesKqvmOWPtkhTZjaQoEexmtY92lw6iZWElSZM+X0BvSpnMu8SldlJPAPnEGNjU49ZkvfGkvtRHqR7xRm1YMQCWhCtiVECebzc1XOUtk3QI/2rP4hVbZ5LC0d2spCQn4NoH+0C8ieNq7ewWHI/nTY2V8KvQkb+9aJe0owXyfgqpxfKRjh2bbUISy+VQIgqIn61K72PQlrvCt5Kr+HpBjpYb1t8JiWGEEpcBSrruCPPrWeOZaiorUoSswBtHFTD2j179P9isui9lQgw2QNqMd+4Pkf7edW/8A+TTr0nELHQx6efnThxxtLJI1h0GTpnadvleosGvvTq77URMawD52IA6CmrWQq+lkPosWvZCyJH2slQNxp2It1B44q5guyrzidSMQlQFpVqQBa20zY1Zy7G/anNOkLaTOoqAAF+CLkmPWrGHz1LalMJT3egnSk/eE/F77+U1m1GqbTWOO/wBeyJ6YNKm/yVv9GxjLSnEPToVHhWoECQNXmL+Ub1Yw/abMmTfxpi5WAUm39R8vOnrGNAw7xUYkaRBudSYseDf6VkC8/hSO7WVtkWkTtwR+dTpXLJG3s/wL9NTbVlrIM8wiMYHXELQkmVIgaA5AMgf0gza+9fWMNnmGWdKH2lK6BaSfxr5RgMWxiTpU13blzKfhPWR51zmHZ2NS2CUr1ak6dhf4bGw24rXiyvG2mv8AfuZ82G3ufapor5b2T7XvNKQzikrbSBBdMmTwSCI6C1fS8K/qG4NgZGxB2I9a348sZrYxzg4liiiimlDylubZGxiAEutJWE7TxO+3oKZUUEptO0YntB2Xw7amyhJb3kJJGraAVC9r1gf9CXiAXbadZ07kAAm17EwN55FfQu0LxdKipWhtEiZAgbHfk/SkWEcaCX22nZUkwCSSNUFUmf8AioW61y8mVSyPpe3B0sTk4fE7FzHZREeEIP3jAEjawHU9B6UifYeK3e7ulag3pUOh1FYHQFI/7h1raYZ9TDSlqjVpBAsL7A9ARe/zqsGE6XHkiyiFGTOpW0BO4ITAtPBm1QkqL9TvczeEbW246Skq7gkKVoKkSDfbaQPW9L8zxS1uahN5UkFROkEyRG9ukDafOtTm2Icb/llWl912FHaGhE6lJifCr0seaX5tlDQXrbJmDIEkq+LUZ2gSkQfOLVV40n1VwWUr2YhRcDvDGo7lIv4elrGf/qar5k3ABZ4I8NkKBJkkqFj7bRWiwWVtuNXIU6m+mI0I31KHuBO1+tL3SlMxwN0gi8832mJo6nHlA4qXcr419CtBStRdEAyVBVxMyoAcbzNcKfcUrQ46dJPxao1AG5vv5VccDaw2YVr3MpvNgADz+U1LjcEiAE7jcT5bSeZ/YqGl4BREWMwbqHyhJ1JnwrSTBHX14rnNHnUi6yDbTpF7Gduaa5doJ1GBHw7xtcAmSJk7+dR4dgqZdWhRRIg3iNW03kiY+Z603a02kL6dmhSrtA85pAWEgjxaU26k3842qMKUkgKeUqNM6VH7yZEXjyng0yw2GAQ4trwzGkmFK1SP6OdxcRBG9V1tI0pS4SlQ2sYIB6gxG0D8KalBbJCqfcn7PZj3epKnQ0iLKUJAJFrTJSCRJgnyqxh1KU8kuKQtc/EqI28JtxIE+VK8O8l5WhSUJ3vFhzYAg+80yw+ACyoki2lCPFocECB4ryLbGJjeo9OHVdKyU3RpWcz7xPdNp0w4CpKlFOgayBOk/ColMCOSNgItZjlyinvcNpc7rWVyBqUQEkAXBKfFIJF5FVctaSh5rUhrvkQElQ0ETcBwWDg8REwCOsCmWYqdYdZeStSdcd8ha5GpBCCQCQCpSREp3tAvUxhj8ESc+xi0Zm+0/wB6lwoJURqSkBKSq+k8ERNvKvvOXuN4hltzShYWgGYBFxfevjWcZNqaxK0hRbkuoUE+IKCtOhUfdhSr8ela/wDg9iyGCgqnxwPFIG0+Hj9TV4UpbcMpmTlG3yjbPZKwqxZR7JA/CpMBl7bMhAiYG82EwPaTVuitChFO0tzI22qs6oooq5BzFFe0szrHd2nSn4lbeQ5P9v0pWbNHFBzk9kWjFykooQdusClcpF9Y8aePUxcSJ+VZrs7h2zYsqKwC2pZkJUUq1JVA3B262ptjc3ZbWG1EqWq+lJBPWVEmUjzg1SY7VALQlLKkKJSCFFJKZUBsmZ68V5z3jNNvLGCUX+a80daEIxioXuv2DtI0VsqT/MBiIAKwQREWiT0JvvuKTYXMXpw7KEq0j/zVKSRsUlJIGw8P7mtlinFKETYeQpW4hRkAI33III+RpOL2lvuv7DlhuJnO2qRilhCVpTA1JKlFB54VuLnY7n5rsmxDy2vs63B3hJKbD4EkElShfcTa9trVtEMtpTpWlCtJkKC1IUn8R9KrOtMaittYQoiCSsKBEzewgTea3R1sJLm7++38hfptPgzy3dC0EpWk6khRUIDqgYCUgRCALeqRXeIYLTDjqkQXJbGrTISSSCABOr5U8OR9+0B30qbULhUwveYmQs2O/pVDNeyClEEuG19J1DjeZJ3vRLVwT+J19aYKD4RljhVJUdaoIVBBPI2uOZB94qw/iUt3guDUSFeZuLRaDNqjxfZbEiQCD/1kX9NNeZb2exaSvvETIMSoKues/jvT1mxdN9S/JVxnfysssJSpo6xvBQQQlUmSQSeLbRxvUK8AW0kpsoASCbHw7gixNwf814ns/iRpBTsT4ZEEeszVwZO5pGpRQqYggkR5lJ39qFnhe0l+SXjdbpirvkFJ7waCBcJ8QUTsoAb7+tpvXb4KmkGIQEyngbXN/I/53qYZOsEjSdRm6ReZsRzBA5uPpXGMyR1SUhZ+AQOPmNjV3mxutyixy8GcypHePiPDew35A9PO/Sm3dKWoaXJJUQT0PX/jYn2qn/ozzawttMgcjefT+1S4YqSNS0LSvaYEWM7db1olOMt4sVGLjs0bvLc2bKkBwTqhCln4bDoraSBJkbnnZ8H2cQgpC2i62oo0rOvvEJULQL3VJCpNzfevmbeKUowDPMEE+szsLT+dN8qzItutOqVqOqxm0bmeRebVWOWlTRLx3ujUZrgGHcKQl0sqSNIUtBB5EKAnwKI+Kx2mYvW/g5i5UUkJC5CZSBKgkkqJPPF/Sp2cE/jUBGGAaCkFDqjdtCQZQJMqUq3B5m1ajsB2ITl6Vkud4tcSYgDfaSd5psIuTTS/cTkmoppvfwayvaKK1mMKKKKAOZrL5o5qdWeh0j2/Wa1NZTtPljvdPd3fUFEEGCNRv7gH6Vyva2HJmwqMPKs06WUYztmAzpGpGIcWzCiqEqkQRpSreLED3v5GcLgS6t9ty8hxHim9jtG5EfSvq+OZC0d0ogJuoattreLfVYT7R1rF9lsO59vWVDSG0GUxEykpQI4uQf8ApoxVFONbUbJq0mb7F5qvSSkBKTzbmNki59DFZTPsa+2/pClaNcaRBUtMA7xCLE38qvFxX2tWpKlIjcIJClAbjiZA3N4imuagKTDmHcW2i3ihKVzsQR8PBnadXSycejxRTdX99yXkfC/wIs1zbDvYdSGdSXUoBlQiZUNWyrEAm8RbakmQNBLyFLdKEoUpRUTZQiEpIVBJncx7Vocd2bw7KQ4t0hK1lKtLgd0mNXxkeLVBFwOJpBi0sAoS33hWsakeLUDY3gWA0kGCeD7PS6eFRCqXc0eZJw7LXdtDvYSFqcSYIBI3PMlXEVFl3aR0OIbxBUtJ8JKjBRaxBAv8JEHeRzSFrLFa3+/XoV3ZKAohSoUqAlQ5gb+3pQ+SyCTqWo8qUSSoxMzcbb+ZHlVJ4oztSXJdOlt2N1qaXCkrBQdljmhKYMCsVlmO0SlCha5EnaJvPMU6wHaBsySsCLkE7fp51xNRopwfwq0a4ZFJbvcf4hmEd4SNMx7xPyrJ5x2jbmEH0JuP1rvGZ8t4FLZHcwrxeEieSQQZEfiKhwuCQttI8MwSFHg2kibzB2A3961abQpVKa/YVLK6pFTNO0rjWjulH+ZAUJgajaPn/mvHc6eSkjQCtMqgG2kb9Qr8DS/OMU2lCmlIDy9QjSYgg8CDqkcW2Nc5S2txJLgUlIEWAJ3uFA/ANM3g3Ineup7tjcVsZvUkm9zSZTnGGeUkEpQtRgpuLm907J9rdK12W9lGnVQpIsJ33/TzFfM8pyxCFK1kK1EEKv8ADFoAPNq+gdmc1UpuyiCgmCTeP2PpXO1OKOCay7uN7obGU5waWzGqOyjCHwkoGk/CZ3tsT62qxjMLh2XIQy2VpTMHSVQSAAkHqTE9TFSuPK0tmZMm4tEm9t5HXzFZTGdoG3scomChsd0ufvI3UQo7wpIOkSYkxatunjjtpLlpr6JrizLkc3Tk+1fg+iZXiApMQAeU8i0wehvMVfpJl6kotMlSrkAkFYN46J336mnYrqwVKjDPmz2iiirlQooooA8rlSQbETXVZPtt2kcYSQ0UJIEqWq8cwlOxMXv8r1Sc1FWy0IuTpEfafK22gnux8SiruyJTATB028O/1rM4hhxklYsVJQ2kdQgKURIPxGCZIFx6UyyYPLQHX1qW654r7JSdkpHHU1YxOXFUEGCDI23HrXmM3tNeu1FbcWdfFi6YJSe4iw+KClhp0rS64oKCSkp22hViAkD5k1bxC3W2yypepR1AQ2VpUmClEmLWgnqpHnV3HZQtaSFQeZhM7bgxI9ulK8fg3klJQNKUgiEqVeYknUTO31PWtUNdjWzbX3QPE5cUJE4v7QvSW4EqlvVBju5SpIAskQokD+onyLPA5U1h3cJqLRIlUCDplMKuL7CRxci9Z3NnsSh5DiGY0p0EospQKdMq6wNhFqs4fEaGVIAmSJUpKgU6SCIBmZIBn2rQska6ub8ESg+OC4+lnWpxwkqUpxbZkQUJVA1ahI2kT5is85m6XnVI7pBSnmVajHIAI2615iseopDcp+PUpXW1p9Ynau8pxiWwrvCCYMA6QRY883i3QUyLSVlXfBGMMoiG2ykSZVcyDJi55I026HzrzLsB3wIcQEzvqsT6HYJsOODUOFzVSVeEnfaZASNh0jyrvEZyrTGsJIP3fi4sVDceXrV7KI8x2TuMOKU0rW2PiQD4SCLAgbm446VawrL8oWrShszAKtR2I2SCBcG3SkycY4fiWSVKMqUev4VZZzK2pStR2DZJAG8kaY6C3mKs9+SE64O8VIdCitUpsjcFPikETfkxTTUjSmFHWANalkmSqCfDNtM6SD/T50sOPCkwpOoxaUzI9Ynk17h9Qulu0/em28EDrvc1STLJDVt0N+Fd5gzeJJ8qujMA04nufFKtJHVMz0F7xSFvDPOp8SSORxP7/vXbWRPEci5ETuODzSck8couM2qGRjO7imbnOM4ddbDGG094oFThKglQG0Jv8X9rVk2u8DSSCUhRKyCkSoJChItF1KUOsA1Lg+yj9wg95I5BmPLeK02VdgXXAC853bYud9Rtex29anBKCXTjt/75F5FXzbD/ALAYtWIbSsn4bOCIkgykz1ufb2ra0pyHLEYZsNtjwG88lR3nrNNq6WK+nfk52Rpy24PaKKKaUCiiigChnbxQy4pO+m0GLm0zXzRnDnEOhCk60FSllStgEGD4eZJMH/dX0jtChSmHAmJjnoDJ+gr5WO9XighhwNuAEu6QDKLAbpuZ5jeNq5+tUntHmjdpEuls0mc40oAbbUErVPjOyQB+PFXcuccLTZWfEBBPn1996RZ9lbhLTSHihWoFajpUopJ1KKQbBQ8/kaedn3gQUKc1KtI0wARMfNIJ5rjy9nR9FxTqXk0ufetgxCjyTVVaT1NaN/AIcggx1jpSXHBDZMrTpG6to9ZtXNz6LLh3e6b2d8/sPw54y2XJSSjVYifaa8Xg0baL+UUsxXa5kOBpqVrO6hIQBa5O6hPQX61k81zbEh/+Y6kJ4CRp89rn3Jp2DQZsm72X17jJZoo2juXMg+JAEb2FvavRkuHV9xB9QK+aJzvEOPd2MQvSqYFt+m2+9Skvq1fz1pUkp0wVRcjeOkj5Gtv/ABmVfrr8iveYvhf0PoTnZ3DH/wBJv10ilz3ZPDmToSPn+VKcP2vUhSm3ULUUixBBJvBuYCuvFavLnG3m9TbgVeCNiLcg+tZckNTg5brzYyM8cv8AwRM9nsOtYTpgkwCqYnzM1cxXY1hABK2zJ0ymd5gydt6vuZWF+GRPnaqT+BWzP9J3gyDB59xTcWduDbt/W2EoJy2r7UV2cnaTYQfQVbdy1KRMpI6A3qGClUKnj1uJH40PDxRJikylJt2xyXFFphtHQU4wWDQrgAdeKUtYSEhZI0Hmdo3kcUqwfaErU4GSVIbuG1WKwQYIJ+94TaOD5VXHpsmVvp3orlyxSq6PoSUpZAUkFKDYkfEonpyE88VZcw6XpSpJhJMBBiQeCfesplPaBL7LZUCnUfAFG0gwoDrwf81rOzmx8VwPh6DqOotXV02TqyLBJUmrr69zm5YOMeu9/JFlyVtqS2q6SQd7pvAn3i1aGs52tTCUuIeQypJkrUJHMCOTNM8nxpWnxbj739QgGbW5/Gupp8fpJwTbV7fT6GLL8VSGVFFFaxIUUUUAQYlvUlQBgkESN6wr7SUrLojvEpKTF1cQkyeFfOvoFYLtPgApbiGVLbOtPeRudleHVbdQMmwj2rNqI7WadM92itmGt5KG1KKT1UIGoAkjgwRsfKrCMWGnEtJhKk9CAFqIMJPlBI+VInGyt5LSnFFYSPEqJVEAbeUk9alx+WqQVLQtKFQCFrlRUSkjSSSIHQ/jWJ72bqjVDPtD2kCJUiVKiwTYAbeI8elYZ7GKdfbL8rhcJH3ASP6bXBi8mtVh8ektAOYdpBiN973hQuOt+tYzPmZd1to0jcpKuTvY+flNJwYFGbb3b3v7l38lJUQ5sw4l8upISJCkwBGkE6dptKT1uJqBxpOIKlNqWsm8k3A+94d9vzmtF2cyttxlanEqMlUbzp5KTYESdNRdn2WNbjkJ0qMBoALVIPAAumFX9ua1q1t4FNJ7maythOHdlckm7SwPvbGeQL/jV55ClIcbAPdp1HgEkSoyZg7f24rntFh0kujRChxJjexB4224iuMvWtxlttGqTMkmTxKtMSB7wYq27SkUpJuJJlL4SkhZFrpJg3PH41cy3Gp7nSl4JWpSVrPxeGSYISN543/ClSsuLZX4kOkAi5kRz6+1WMOUkEoAFhqjcGZiORM2qHFbkpst5d2ycSsod1KbkQo/Em5FjyJGx+db7A5i24zYBYUmx4In6XivmbbSde4uIEi0gHcSDxWjwrhwqFLBKyojwmyQACRYWFiBbpWLUaavixbPx2Y3HNvaQzxrRUdURNdKwKkxHiEX8iatYDMW8QkKQYnabX5A6xXeYZiGGlLWJKfhTwomdz6xauTBSeRwnszY5rpUomU7V9olNI+zBNydSo3iIAn8aQ4bEaAHAggyBqBIkzO49qspeSda3I1LvcyAegTMRt51Pj0thAU2olWkam4IEghMhQsbmY3rv4YLHBRRgm+qTbL2V52jEOdw8CEEpUggBBSvSASIEX22860fZHPVqJacPiHwq62uD0NZHENNPBsBfdFRSklYmVSJiPFG/EW4kVZfxDuGxSW0ie7X4ZjxgpgGRwoT+dJ1WH1YPp+ZcPwTGXS6fDNtn+alhtpYPxOpSQRNjM/h+5rVdn2x4lpkJkhIPB1EqiYgSdthFqymJw68QUNISSlUEiLApIV4lCQLW9+a3GVYZTbSELVqUE+I9Tz7U72ZjnDGlJUZtVJdi7RRRXUMQUUV4TQB4owJrMdqMI4pvvWQVLiCkCSQfeYmNulaRaxtSnB4kix4tWbUSW0ZcMdhtPqXY+cY3K8StfwYiFQFfy1CLbWEaZvNWm1lPeNKCghERrklVyIhY36edfSEYtJ3tQthKulIWKL+WVmh55L5kfJ80x4efRo0JIWYRsgJjSQbfHB/ZpK/jAlxxIlQ70BOqdQHJEje0x5V9nx2RtOpKVoBBM7QQf8AkL1nsZ2CZXIBKZ6gKvEAyRPrzej05Rd0T60ZKuDE9nSrvMQhTykiT3czoa1GLG9pjwi1yetd5Rl7eHfcUhRhTkCVapCBq1TyZMwZEgdKfYjsC7oMORBFh96DIvO0/KfKqmN7K40ojUjokzGlJJ1CAI95m9S2yVKPkyPaRtZUU2WDcqgqUSSIv/VEfDavcrcQ1BUqFEAGSB4eIJ2G1q0bH8P8QmAp9MRF25gi++q4oe/hkXQC4+rfZKQBHAhUx86mPFESmrsy+JRAkzKQEqO+oC39pjmPek24EvFxuxun4bDgkJkCYPXet+n+HmhKQjEOagd1X08DSPL99KB/DaSf/Er9kJ56gyD8qlMhyRiH8KoBL7cuOT8OixkwRp+oinz7pcQhUCE3ggjhJBg7WixvvTfB/wAPVMkqGKcV0BSmJ3G1wfSK7R2IWbLfXoBkhIAJ6AkzVJMtGaSMtmKUiAJQTeQYIjm3M9Kt4PHuKaDWIc7xVyD4duCYubcnzp09/D5nUFd68Seqz+B2rpPYNCTPfOm0XKeltgPOquMHVrdAsjszQy9Mk6UlJEzsR+XJo8CeSpNomLx1rV5d2LYSApetahO6iJvxG1PMH2dYCvA0nV6An67VK3D1EjD5blOIxK0qQ3/LSLFUhMk3i3SK2GC7EqddDrrghICUACCEjjVO8kmd71psDgkpBBSeI+dM0J2AsKZDFbtip5nwiDLcAhhASgQBc/mZNyaYVVdfA8M3P0qdLgrXGkqRmlb3ZJRXgNe1YqeGoXnYqVdLMe5QBDi8fHNUmcRN+tJ84xZE1QyXPUpUUOGATIPHmD0/zWbVQcobDsEkpbms1SK8Soj4TFRNvC1969Sb1xW2dCif7a4BwfX9K8XmShcpHWoiajUocn1psMs0vmZV44+Cwc56pNeHOk7FJ/Z/WqbjoifcDyqo5EAARNyfc/iamWpmu5KwwfYYuZsgjY1wnNG+bUsWoHYfuKhRuelUWpnZb0Ijw41k/eHrzXZeRwoDyBrOrcEmvNYgWpq1UvCKvTo0KcQhIEESDyaDiU9QB61n9QG1dNvATtUrUvwR6CHbi09RXPfDypW09O1SBV6t678FfRQxDyOSPlUjeYIF7k+QilZXFcKJqvvElwT6MWPDnfRPzrr7e4v/AGjypThGSSCNpk03wrcwRz+dXjlyT5ZWWOEOxzi8QGwm9yasYTHzzWN7TZ6HMRoR8Lcpnqq0+wIj51dyjGExXTxR6Y0Yckrkblh2amFK8A5TNBphQFilmYN2poaheamgDDZvgyZrLY3Ama+nYvATxSfF5ODxQBi8vzZ9iADqSODf5HinuE7UtqgKlB89vnUmIyLyqg9kflWfJpYZOVTHQzyiaFrMkK+FQPvXReT6iskcnUNpHpaukNvJ2Wfe9ZJ6GX6WaI6uPdGoxGIHH7FVFKm9JftWIG8H1H9q5+3PD7oNZ56LM32HR1WOhwl2x61ysgiaU/6g5yj616cyVygxS/c83dDFqcfktkSY/SonFmY6VB9vP/tn6VwrGEj4DNStJl/hJ94x+S42uQZ9q8D1vOlysQ5PwmonVOH4UnrerLTZP4SPXx+R01idulWFPfSkrbjkfDf6UOd+q0gegvV1pMr7FJajGu46DvX/ABXDmJSPiUB5zzSdOBdO61H6fhXaclJMm586dHQy/UxMtXHsh5hu0TDYuok9AJqnmva1xYKWElAO6jE+3T1qJnI/Kr+HyPyrZj08YfUzTzSkZzBYJRNanKMGRFXcJk4HFOMJgI4p4kmy9uKZoFRMtRUwoA9rwivaKAI1N1EvDA1ZooAXLwI6VXcy4dKcRXmmgBAvKx0qFeUDpWkKK5LQoAzCsmHSolZKOlaosCj7OKAMkckHSuDkg6VrjhhXn2UUAZH/AEQdKP8ARB0rXfZRR9lFAGSGSDpXYyUdK1X2UV6MMKAMunJR0qVGTjpWkGHFehgUAZ9GUDpUyMrHSngaFdBFAClGXDpVhvAjpV/TXsUAV0YYCpUt1JRQB4BXtFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//2Q==',
     [
    new Ingredient('Buns',2),
      new Ingredient('Meat',1)
     ])
  ];

  constructor(private slService : ShoppingListService)
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients
  }
}

