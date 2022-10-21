<template>
    <div class="registe-page">
        <NavCom toUrl="index" :logoUrl="require('@/assets/image/logo1.png')">
            <template #left-text>
                互联网软件外包服务平台
            </template>
            <template #right-text>
                已有账号？
            </template>
            <template #button>
                    <SmallButton toUrl='login-LoginPage'>登录</SmallButton>
            </template>
        </NavCom>
        <div class="container">
            
            <div class="form form-wrap  plr-15">
                <div class="con-title mt-40 mb-40">注册需求方</div>
              <!-- <div v-show="!userStatus">
                <OptionBox status="注册开发者" @clickOption="updateOp" headUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAAAXNSR0IArs4c6QAAJmZJREFUeAHtfQd8XMW1/rlbtNKqWb3LsmRbli1XMDbGjU5seoeX57xAMAktCZjqlzhAKKHmEQIpQMAJPRBC+4MhtuQiyzbYgIRluchqK8uSVl272v7/zqyuvJJVrsqudmXP7yfdu/dOOXPOd6ecOXNGonEaqqtbY+ySLdtFlO0kV7bkokxyUYRLonBcwyW+EoW7cM8swO82XNrwu41wj/h8bUX8MhVJpRJRqcalLU1NjTBy/PEWUL/AD1UtLdGODtsyp4POguDmoVLZLpcrxhs1kyTJCHCVAii7VWraqA7V5qdFRjZ6oyxf5hmQQKirc4WZLE1LnZLrLCIn/qTZELzKk3GSStWKylWr1FKTmiSbRqsJUpMqCLF0arWkk5ykl1SSHoIN43RI3+5yukx4b3I4XBa8tzjIabXb7FYHubROhysKAEh1OZ0RPcqREJNc3xKpNqpc0ka9LmpzfLzU7hknEO4DBggQlLr8SOO5TodzFYi+FEIJkRmMZr1TUqlLtCqpJUinjVSrVSlozuPl96N5RTdT53A4DVaLrcXmdEW6nI4cdCfBchmgzQzaPlCpVeszkqK/ANAc8jt/vvo9EMqqm2YT2VehX78eDE5kZoK5LnzxxRqNyhis1URqNRoIw9UtDF8yHLR02uz2EvxrsdudMWgxckGL4Cv+1WKc8QaRZn1mahRaDf8NfgkEZmT5EeMlLgc94CLXfJl9KklVpg3SVuqDtVNAeIr83J+uAKvB1Gk7YLPa0p0uZ6ZMm0TSLklNj2YkxfybgSw/95erXwFBNP81TVc7nc4H0O/mMpPAtEaNRlMUEqSNQwsw3V8Yp4QOtBB7zVZbvd1un4m6RbvTSMUqlerRjOSod1A3v+k2/AIIYJLmcE3jj9Cs3gdmTWaGqSTJoAvWHdTrtAvwfkyafbfgRv6fuw+TxbbD0mmZ7HS55JbsILq3xyclR7+G9/aRlzKyHMYcCIdqGheTw/kCWoCZXBWM5MtDgoOqQoKCFgIA2pFVz79SQ+A2s9VaaO60pmGGkuGmTioiteqWrOTorWNJ7ZgB4ciRtjizw/IkKr8KAgePpAp9cJAhWBfELYB6LJni7bJRV0enxbrD1GlNQV0n4jePGdaHqHV3JyWF13u7/L7y9zkQUHFVmcF4M6r+CAaCUTz1C9JoCsNCQ07HO11fRI7XZwCApb3DvN1qt6P1o2AMKJsw31ibmRLzZ7yDfsJ3wadAqK42plrI+Samgou5iiqNatcEvT4eU6yJvquyH5bkoopmk6nOaXe6Z0gSbdWR6rrU1JhqX1HrMyCUVzWucErO9fjqYzANPBISElSh02oW+qqigVCOxWYvNJutEzHtTEKLYFS5VKsy0qI/9QXtXgcCBK8pqzY+gi7gbtxDAYhWICwkC8PCrumUL6oZSGW4GpvbzYegQZ3PYwd0GU9mpsasxb1XZxZeBYK7K3C9DUX+IigE7Hpd0FbMCJYxIAJJNL6mlQGAmUW+yWJdDN5pwLsCHUnXeLOr8JpAKmsbc+025+cYECZjSlgTFhJi1GpUYoroa8YGank2u7Oo3WyG2ho8JKlGo1Wdn54YXeyN+ngFCKwbkBzOjwCCCSqVes+EsOAMoDrKGxUY93m6XE3N7Z3lTqdjLsDQ7FKrLvKGzqHH0u1oMLXMUH+x5HBsYBCoVarCqAj99JMgGAFn8QExD5mXzFPmLfN4BDn2mXRUgXDIYLyBXNL70I6EYEVw84SI0NMwHjihdAN9cnmED5mHzEvmKfOWeSx4PcJ8PZOPWtcgCHM6X+bMdTptXmiwbrlnQSfvR4cDHZ2WPIvF5uatSnVjVkrMK6OR86gAQTRV3BJANRyi024OCdYtHQ3ilORhtVopKChISVSyWKwAqbK4ijIco0hmiy3f3GlZhtmFgyTX5ZkpcR+OlJQRA8E9MOQxAQEDmrxQffDykRKlNL2xsZF+seY+mpKVSffdfWe/gDDU1NDb775P27YX0vRp0+jaa66gGTk5Sovxy3gdps48KKCWQ4Bml1p93kgHkCMCQtcUcQsPYrj/Cg8N9llLwNJ56tnnqKBwhxDU7Fm59MA9a0irPbZgaag5Qu++9y/asq2AbRLxLohsNquInztjOl179RUCGOJBAP5r6+jcDOuopTybwNRyyUimlsMGAiuLrC7XDoAgmUe0XQPDUR18DiSbouK9tO7hRygsIhItgY4aG+pozuxZdP89d1FDfQO9+/4HtHnrNoKRC+lDwylr6nRKTEmnJmMdHSz9npobG0T2M3Nn0HUAxLTs7IGK88t36Bqcza0dOx1O50LWMwRJ0oLhKp2GBQR8XRqsIOazxpD1BDy94ZGtr7jFwv0luoQqg4HmLzqTIiZE0+4dW4SQk5MTqba2rgsAYZQ5ZQYlpaZjBtuzqsb6o3SotJiam9zbFLhFYVAoCZxXSHAIJSclUs607B6tkJL0oxkHtFiaWk17Wc/AGkisXPLYYcjq6J7cUUjhoaqG38GQ5B7WGEaF6UN8rSf46ONP6W9/f52SUibSzHkLBNUOh70LDPVoAcJo0uTplJw28TgA9K6isb5WtBAtXYDo/X6w37rgYDr9tPl09ZWXU2KCVwynByMBonA1NbWbzKyBxBrOE1lpsfcOnqhnjCEDoWsV8WMMDh3h+pASX6uNm5qb6daf30V2CP6M5T8gHb5MOeCrIBbohOi4QQEgp5Gv3FVYLJ3yzwGvPN6wIm5HWxvVHzVQZ6eZ1Go1/de1V9OlF184YFpvvWR1dJvJnAOBqrFqeeFQVy2HBAQxLiDXN2BEjF6nyw8O1i7zVsX6y/f/nn+R8rdspanTZ1NG1tj36wyKmqoKOlDyHVmtnXTu2WfRz1bf2B/5Xn3eabHlmToty9E1GINImjOU8YLiwR0qrGKjEgYBLyXDnsCnMwTmYElpqQBBaHgETcyc4lWmKs2cxwsp6Rm0YMnZFBYWQV/8ZyN98OHHSpOPajxe2WXZsIy6ZKVYvoojsnkZWxaxUQnbE6CwIbUmI60xDxBfevlVkU1OLo+LFJM+0qIVpQ/Rh9LcBUswgwmm1996h2qP1ilKN5qRWCYsG5YRy0rITGEBirjJhqZsY8h5smXRWBiV5G/ZRocrKikhKZWiYxMUVs+30RgMU3JmkcPhgALrPd8W3l2aFO2WEaQEmbHsul8NcKMICGxtDH1BFNsYjpV5WV2d27g3OS1jgOqM/SueqQSH6Klw504or2xjQhDLiGXFMuuyFB+UjkGBIPYdwOQcXWGnMDQdNMsTOwKPGeITU8S6xvd7S8aMGSwrlhkIWNUlwwFpGRAI6HM0vPmE+54gjbbwhLc2HpCVx16GRbh3zlcbao499PUdLMN5m4AYy7llqBmIhAGBwNvQeAcSUF4RFhp8+kAZnXx3jANBWvcOPZPZdOzhGNzxXhGWHcvQLcv+iegXCECSumsvIvEOJPz2mQq5f3K9+8YCxdD3335FRwwVYpFquKVB4yqSupzDzWF00rHMWHacG8uSZdpfzv0CoRy7kpFoMu9F5G1o/WUwXp6zdnBXwSYyVJZR0e4dVJD/OdXWVI0IEP7AG5YdyxC0TO6SaZ9k9QkEIEdyb03HdBEbUgdCUp+5BthDbgm+KsgjU0c7rTj/HDpz6RlQH7fSd19vp+15bkAEWJW6yWXZsQz5AcuUZdv90uOmzwEEO6lAY5LLW9O7diV7JBlft7y+8NV2BkEbXXLhBfTzW24SFfzv666i115/m/K3bheAKNv/PWVl5wo9RqBxgGXYabYasCU/1y1b+qB3HfpuEeCphCMGwz8BEKTtnWi8/LZ2AgTbNlFHextdvPL8bhBw/TImptG6B9bQSy88Q0vPWEjtaCG+/aqAtudvoLpa0e0GDBtYhuxrgglmLzR9EX5ci8A+i1wu+3y0BkbYnvEW9b7S+d2z1pZmsndZHykhjuu17/s91IGW4MIfnEe/uHV1n8kyMybSb9beTYfKyulVtBDbtu+kb3Zto/DICTR56gyKg84gEAI7HOnstDSi3vNZxr19Oh0HBOG4CjVTazTFSOTz1cWhMpWb9r0Y6dcfHd6cfeUF59Cdt988aLFZmRn08K/upQOHDtNr/3ibCnbsoj0ARFxCMk2ffSqMYv3bqQtkGQwXRDug7YRM4ZyM6C7PSvcAAiKrD1c3XM8R2GeRZ0R/vD9iqKR9RbuFHWL2lCyaAyujoYT4+Di67KIfDCUJDGUn0W/X3Uf7Dxyi37/wV9pXeoAKNn1G02bOFYYyQ8rMx5FZpkLtzR7qXDAs8vDh1AMI7McQHUEiey/zN8dVao17OMNffmRUjGgFuK+G0Szd9OMf0jVXXEJwUuUz1k4F8J5/+lF6+71/06t/f0tMOY/WVIvWQW6dZJp9RtQgBbFMWbbs7Y1ljeifyUl6AIGdWfILrU5biUumHMkfruecuZw25W2h6ooyqqmuICdW+KZMzqT719xBGelpY0IiA++6qy6j0xecSo899RwdOFgGw9laQVtSYiIxzf4WWLZw6pXZJetuIHTPKdmtbbsFpsCSFAyL5Bq88LtREO9jYKPV9o4OWnX9Vfi72qetwEBCZXuJ9W+8g793KSw0lJ596nGKifY/FxBo8Q2wfE6GpqwzTBcbL7sL7m5L2bcxIoWwR1N/BAELgRk7bdpUIY+LV17gNyBggrh1YJo4MI3+CAKmjWXLMmZZs8z5GYduILgdXMNZLNzaul+d/D9eOSDLWJY517MbCG4v51AiabWR44UB2AVE1YYjYo/DSOo0WvmMhIbRTMv+q935sWd7dxBA4PMO0GjMZkMGrUadI78M5GtZeQVd/z8/pVU33UY/uul2Otpl4TTUOo1WPkMt15vxMdPKcRutSLPdsu9qEfjQC8wrMbNQl+Dq35oRhRxipY+xsUnENhypFdM8hUl7RButfHpkOsY/WMZdslax7Jkc0SLwySf8g8874Ot4CDZbz11fw7UfHK18/I2nsqxl2QsgYGFyHhPKh174G8G96dGo3aqPjflbe7/q8fv6ay4nPXbjcYiMjKArL7uox3ulP4aSz0boOThoNP6/TifLWpa90COUVTc0oLmImRAZWuetk0+UMn6weOWVlfTrBx+h9vZ2+sVtq+niFef3m6SltZUqKquJ1wlC9fp+4w32Qkk+H376Of3++b9gk0sYPbRuLZRc6YNlO6bv+SSa5pYOGLhKxszU2FiJT0OzuCwNmFu2RoXre5xXNKaUDlD44fJyuv9XD1J4WCi9+4+XBojpu1dX/fAn1NbeQY89vI4mZWT4ruARlNTUZmqFCVuETtLFqvhIPM4LTUP1CPL0aVJmdHR0FJnNbK3tH4FpYZoCBQTMNVnmjAEVNEwCCHwamn+wVBkVwdiO3mmx+IVNIbpVQQvTFEhBljljQMWHYzLxfCReIFUiBl8f6/cbm5rHnGymgWlhmgIpyDJnDKiwPy6TiedzEQOpEnExsYLc2tqjY062TINM05gTpJAAjUat46iMARV2zYopI0zTxEOFeYx5tPSupeeDMCEb6yDTkA47x0AKWChzf/zAAGaL7rORVSopoFqErEkZguf79gubzDHl/779B0T5WRjEBlLoljkwoMI4J4yJxyaIgGoRMjMnYYt+MH21+5sx5/1Xu78VtDBNgRRkmTMG0CN0nZYOL3SBVAn2WTRzxgyxnrAflkFjFbhsXtNgWpimQAo4NUrInDHAKuZwJh7oCCggMM2LTnfvxPtyYz7/VBw6TP1vTjWZzYrz4Yhy2TItQ0o8xpE9ZC66BjcQuk5NH2PahlT8gvnzRZO84T95wh/BYInZnc01q1bTTbfeRV/tOf6o5u/gxHP1bWtEnCMKZiPs25nL5i6KaQm0APWyGBagawjvYbwaaBVhB9tnw0D0408/o08//5Iuu3jFgFVgP4hnLltM78Dy+J61D4n1h4SEOD51lurqjdQKd3kcrrj0QkpKTBgwL37JZba2tdOFKy4IeGffkrzgFB0Z1oi6+Z+15SDiYIPWn93+SxiM6ukfr7xA+hD3iuNAyYq+L6GPPt1AxXv3UYOxUWgno6MmwC/zVLH1be7smQMlF++4C/nhDbfAkNZEL/7hWb+1URykIo2NLe3RvPDELQJ/BnxukAl9RsABgY1E+Ytkl3Z/w/6CW1f/eJC6EwZ2OeJv0IgDROCymltahYNNfzVUHYB88YpljhuWeRtPH0V76FJR/yOowXIc4/dXXX6Z+CLf++Bj2vOtV86+6lFDLoPLYgBw2YEaZJkzBlihJIDgcLgsgVohHqzdcevPBPkPP/60V30c8oCTy+DAZXLZgRq6ZQ4M8FqDAALmlAELBBbEzFw+f+FK0Vzf96vfemUxiheXOG/uErgsLjOQgyxzxgC3CK1cGQc5rYFcKab96isuE7OIymoD/XzNWmHKPlp1qoKHNM6T8+aZCpcV6KFb5sCACjZrQi1nt9kDHggsmFt/ehPNP/UUYsvlm+9YQ19u2jxieXEeP73jbpEn581ljIcgy5wxgD3GUinWo9EijB/PKK4ud2Zsgfzok/9Hn32xkW5Ydb2YHg5FgHv37aeXX3sDA9AiGKS6VS5y3kPJx1/jyjJnDGgkolIm1OlwBZZVhQLu/u/999Bb77xHu78pwt/9lJM9hZYtWUSnnTKX0tNSjts7ycYllVUG2vn1HniBL4A3ePeqIh/zw+c//ebhRxWUGjhRZJkzBjQal7bUgXEizJVSA6cKyihNS02hRx/6Ne386mv68KNPae++fUK4f3rpNQrCIWDsKCMUiigOHVAMsb9nq4f/ZD4R7uKLVtBp6A74wJDxFmSZMwY0qakRRmgXjbBmjWETZzQT8eOtwixI/mNBMyhKYT9QDk/vrJWU3eTyNDAuLg5OtNIpe+oUEZ+BMl4DyxoyF+bsjAHR8QEZ3D0scjicBpVaPe6AIAuTBctaSP6TAxuecoCaVX50QlxZ1qhofJfs3VveMI/czbW3WmwtJwQXPCrJADjRQOApa1n2bI9AKjVt5KvN6fL7LW9M58kwcg7IspZlL7oGdag239mGV04HtktLnbxbduRF+SaH+oYGasNSsGcwmdzGJRWVbl/K0VEjmxDxWKIKiiQOnHfZ4XJxL/8LDw+juFi3VbX8zJ+vQsZuWTtZ9kxrd8dYVl2/G93l3Igw/R6NWjXXnyvCtPFxv+/8833aWrB9wE0uvDD0+ycfp1BsjxtO6MA2tl/cfZ8YWPaXnruWxYtOF2c/piQn9RfNb57bHY49re3muSB7T2Zq3DwmzK0lESSq0D0453babC1hbnN3vyHck5CamloYlrzffd5zQkICRvlTPaN033NrUVJSQi/+9WVa88s7up8P5YbTcouQk5PT71dfun+/oIdBueSMRVA/X058Iq2/hk6bvWssyDJ3h24gQNe80QFvnHa7M0Z+6U9X3kTy7vv/gqLHfd4z3IHRhStX0sIFpx2nGJLptsN1zqOP/U4cJL4pbzOduXyp/ErRldPwIeTpaen089tv69Yu9k7MiqjCHTvp408+EedRMyCWLTlDLFEnKrB06p2ft3/LMmaZy2V1dw3+6l6Pl30FADZvFdvK4jHXX7lyBZ2+cGG/AJArx9cjWHN46JFHCN0dPfO7xyhB4bG9R1HunffejxNnnbTuf9dSIvwmDhYYENsLC+mTTz6F6Vu9oG/Z0sVuQCgsd7AyRvoe08WB3euxvz1E+gADRcnUaXPrVkda6iik5xPf+ctkJq9csYJ++/BDdMaiRYpAwMUn4SDva666Uuyc/v3zL4h8BiOLy3r2D38UaTitEhBwnuxij2ljGplWzodp5zr4S2DZsoxZ1rKPRUG7J4E4RXQ9/7ZZbemez8fynpd7LzjvHEHCtoICMhqNQyZn+bJlNGvWLKFRfPe9444qOC4/jrP/wEGRhtMONTCNTCsHpt2flqxl2cqyluvW3TXwAyCFnXJXAy2JEaH6vWPpj5lnBdu2F1IB/iqrqmV6KQpTwXvvXkOxQ5yusYXybx58SHhaeeTBXws1cnemHjesfl677iHh+eQ3635NEeHC2t8jxsC3DRig/u7Jp6ip6ZiXgfS0VOzBWEhn4G8sZxUYG+xt7TBNh9BrJ6XGpmK2g2GhO/QAAj/CNPJpTCPv1Gq1+eF63dA/h66Mh3Ph0fmWrQW0eVsBlcM9Hgc++jcqJo4SU1Kpg13hHD4AhxTRAgwxMUMb135XXETPPfe8GCfweKG3mRk7u+BxAY8P7rjjNpqVO7g1s2c9uSVgEDSiHhMnTaFQHPtXa6imJmM9PjKniJqB8x+WYmaxZPEin1s+t5ks+eymH9PGZzBtvMuT9j6AIA7u+Aa2/saoyLBQbyuXuB/lhaANX26kb78rEjoBnpdPiIbwk9MoITkV5y0f25a5H6eylx/cRwyCe9bcJa6eFRrs/vU336RNm/Kwv2Ep3X7LzT2i/+GFP9OmfMwuYIH0X9dd1+PdYD8YBE889bToujImT6OpOBpYDlarhdhzOx8W1tzIoHAJtfbsWTPpvHPOEgtcPL7wZmAlEkzXTSgb5uuaOb0P7jgOCExMWVXDThwnO18fEpwfHKTxSqvA286++PI/9Mn/29CtrAmPmEDJqRPx9aeTLrj//Qn7935L5YdKRffAYOAWQmmwWa1iFsGzCdYtLFro3jbH08Snnn1ODC5/vXYtaYOUbw7nFoBBwN1CRlY2TZ0+u19y+CCxWkMlGarLqb3VPZ1npddKnCJz7jlnj8jpV7+F4oXZas9Hi7cMKyu7MtNiT+sdt08gHK5puBRGC/9Cq2BAqxAPFGl7Jxzub94Y8hGmVx998hnUtSZS40tISJlIaRlZFDlBuUBLAYYKgIGXju9mMAxBjVxVVUWPPPY4wKYTWkeuC2sP4b6e1t5/H6WlKfdz0IixwJMAQT2mixMBguwBQNCbZy3NUF2XH6KjOGfSgZZRD89vF628AH8rFG3U6Z1ff7/RGtiaWtrrcLhXCtzlXDYpOfa4EXOfQIDgsQPK+B2f9KbX67bAP/OS/gpR+pybwy835tEbb71D7K6OfRGmox9Nz5zSo+lXmh/HKy3eI8YM8bEAwz1rKGrCBMXJP9/wBb37z39S7gy3JXLx93vpqiuvpPPPO1dxHmys8uQTT1FdA0CAumTnDk8zz11HZdkBqsT4x263USTGFtdfezWdc9byUVkZhbZ4i8lkgQyl4szUmFkABuYDPUOfQOAohw2N1zmdjjew+6k8OiIsDYJU90yq/BfPAP74p7/g2Jv9ogVIz5xKk9CParTKm9/+StsHMDAD4+PiRcsQha1rSsPTzzxDJfvYFIMoZ1o23XXnnUqTYlYAEKAlqKuvE4CeNkwQeBbIh5Mdxvinsmy/aCGmZU+FoezqEc00IHRHY2t7FXY1ZahU6usnpUS/6VmmfN8vEFjwsFzah4iTQ0N0Bbog7SI50VCurFD588t/Iyv65tj4RMqZeQqF6Ie3ANRfud1ggNr5njVraMIEZavpLMx1Dz4osn1w3TpMTZWBqLm5BWMCtAR1owcCz7qZTR1UUvQ1NdTVorUMopt/8mMxuPWMo/TeYrUVdJgtLLuDcKw5jYHRV9p+gcCRywzGG2HO9BISV2CTbCLAcWz43lduvZ698trfxU5ltUZN03LnUUrapF4xRu8nM477W1YhMxgiI5WB4evdwiaHTpk3TxExLS1uEPAUk8c1DGxvBUPVYdpXvJscdoewqrrhR/89pKIgNwtmCrWQ20Q4VP1JZkrMy/1lMCAQkIEGYwVwyjVTp9Xmhep1y/vLyPM50tFzf/wTFoi2iq9/7mlLKCw8wjOKV+5lMCRiRZJnExEKwaCUmFYBAt5Sd9TrIJBp4oNH9+zcQtxKLFuyGNvsfqp43NBh6syz2OzLMTYowthgHoDR01O5XAiuA05eRUK16hZcXVa7bSFMnSs80vZ7+9dXXhUgCIuIpAVnnO0TEDAx/HWmTswSgnoS/X8rBqWjFTgvzpNBwGV4syXwpJk/IMFD8JI/LOatogBZWe32hSw7DMxYhv2CgPMbEAgcISs5eisu6/GRBzebTHX8bKDwn0359NmGL0kfGkanLlhGQcG+NXaaPusUSkmfJFYdn3oaYOhyfjEQzYO94zw4L9Y9cN5chi8D85B5yTxl3jKPBwssK5YZ4q3vkuGASQYFAqcOUevuhiKiyWl3zkdTU9hfjrz0+tLfXsUpsmqac+oZPgeBTNeM2fPFeKTmyBF6GgJsw9nPww2clvPgvHiMw3mPRWAwME+Zt8xj5nV/gWXEsmKZsez6i+f5XBEQkpLC67E/bi0nNJutEzFmaPTMRL5/df3rwpfR5OyZxN3CWAY+pjcZgjPU1Iivmd36DzVwGm4JOI+U9AxxuOdQ8xjN+MxT5i37bmJe9x1cjW4ZQUqQGcuu73g9nyoCAifBiPPPsHDcCgvXpOZ28yHR93jkxSuEhTt3wTYwQsyrPV6NyS3ow9cLMKRmkAE7mZ96+llxXqRSYvhsSU7DaTmP6bPmKx6kKS1jOPFYCcc8Zl57rspyXiwTlg3LiGUlZKawkG5TtcHioxBndbXxOqvk+ganiM43d1rzgnXa5XK6zz7/QtxOmjLNLxjGxAgwzHE35dXQ7XMTvwyLTUpCPhafqrFyyCCYgTw4L38ITAfzuHjPTowXvqDVN/64myzIJB+yWY44xiCSrsPVveTZHaP/myHXrryqcYVTcn4MHaUjXB9SotWoZvJ08X9u+hm6DTMtPw9nNPuZ40mmr3jPDjqCxZ6hhCQsfuXOXeA3IJBp5+OQ8zb8G8voIfTqX18U9NnszqI2kzkHAlWrXKoLM9KiP5XjK7kqbhHkzLiAQ1UNT6IHuqfdbI6JCtM3VVRURrVhZB2flOp3IGC6+StigcbGJxGaTbkqA15x5J1YBeW0/hb4Q4uOS6S6I9UE3vN+zSaWBda3NVjgfmKoIOD6DRkInAjKibXQOi6G/npRc3vnngOHynhLsS462n83ebBAk7DEPV4C85qBcKCszDIhJr4cspgLxBdgXCAG9UOtp+LBomfGYKpdR9I1mJ7UYGFqLojag2dOvQ+0h550nMj3zGvmeXRU7B6WActCyGQQxVF/PBtRu1dZ25hrtzm3wIhlwj/fe39zq1VaGoYR7cngfQ60t7dSRJBr85VXXL4UIGjWaFVL0hOji4db8oiAwIUeqmlcLDkcGzB4DNlc+HVebX3z8uESczKdcg4kxk3IW7rwlOUQoNmlVp+nRHs4UO7D6ho8MxQEqOhaNFMOJiw+Njrf8/3J+9HnAPNYgICXlMH7kYKAKRxxiyBX85DBeAN2dIhlzu1fF+dV1RxdLr87eR09DqQlJ+Sdfkqum7cq1Y1ZKTGvjEbuowYEJobBILlcf8G8XV1UcmhzycHyxXg84lZnNCo6DvJw5kzO2DozJ2spt74uSVo9WiBg3owqEDjDMkP9xeSkt3jMcKjcULi7qHQuBpNDMmjhfE6GYxzAYNAyb2b2nqyMlIUQmJm7g8yUuA+PxRj53agDgUlyDyCdH/FswnC0YU/Bru8y0EpEjZzcEy8HfP1Ni+bPKk9JiOUpYrNLrbpoNMYEvTnpFSBwIV1Ty88BhuSOTkvNF5sKjTCU6HfrUA3WAhphDZw1dfqo2zT2rvRY/i7+Zhfqp0c9ZwxKRpBGU3TumQtjQoN1yawnwBTx/JFMEQcq0Gv9NxMcJEmsqC/gilzyg2U5yQkx+UA4eo3jQ3OjkWpgo2eDJe94DlzH+qM1A1aRecS8Yp4x75iHzEtvgYCJ8RoQOPPU1JhqqDyXYSjyBDbLqBefNmfZgjnTv0JF+7Rn4DQnemDeMI+YV8wz5h3zkHnpTd54FQhMOCpmz0qLvZdXxHBvTE9NnH/R2WdYwkJD+rV08maF/Tlv5gnzhnnEvGKeMe+Yh96me1iLTsMhilfEYM8wxyK53gwO0S1ecdaipMqao7t2fbM3Hs4fJw4nz/GSRq1WVcyfM70uPTlhoagTjErYniA1LdqrrYAn/3wGBC6UmzfMHpZh5fJmjBQeQcXnpyXGdRbu2ZtXUkSnI8oJNc3kaWFqcvz2hXOnL8S+g4n43cTmZWxZhFZA2Xq5pzRHcO/1rqE3bVzBrNTYF0M0umzcv4a1dR1rym5dfWNtcmJiAfoSR+804+03pmqOiLDQggvOXFDLdWceMC+YJ8wbX4OA+eu16aNS4bHOARv9XuBNNJymubW1fNe3+6qaW9oWwrBo1HZhK6XHm/FgEmHb901h4erVN6UlxMdnuMuSinjfgTd0A0Opy5gDgYlFd6E5XNP4I2yvuw8/J/OzDnOnAeOHg3XGpgXYWOPbzRFMwGgGiTrjY6J2YByAfaTBKV1ZH0R38Pik5OjX0AJ4fTA4WHX8AggykbxGUV7TdDW8qDwAeOTyc5yfYCw5UFEMdXWc3WF372GXE/j5VaPW7IVauH7alIm8ZTDaTa5UDO8oj2YkR70DAPhNN+hXQJDlCkBI5UeMl7gc9AA0k907SlpbO8qK9pdV1h5tmALHEvKXJSfziyscfxgSE2IPzJyamR4REZopE4WB4C5oBR7NSIr5NwDQp1JNjjsWV78Egicjyqqb4IfGvgrdw/XgXiK/Y0YebWgqPlxpMNbWNUVabJacMes+0OzrtLqSxPiolknpKTEJsVG5DGRBJ7yXYRT2BkxD1/f2WeRZR3+493sgyEwS3caRxnNht78KRF8KUHQ7WcLYorOmvrGkoupIS72xJRLdSQq8mHnlABJ4eavDMUCGuJjIlolpSZHJcdE56Ou7xzCgzQzaPmA/hhlJ0V/4U/Mv87Kva8AAwZN4dhdssjQtdUqus+BIHH/SbAClx1QYrnNbm5tbqxtaWpoaG1ttre2mIKvNqgOQgpwu0sHgU49ZiR5CC+O8wYh2jOpN8CpiUklkgSCtQdogC7zVW6OjI7SxkZHwzBORCle+PYwyIWjM913fQlu/kX0b63VRmz09mnrS7c/3AQmE3gytammJdnTYljkddBYa5XmoVDaAEdM73mj8huCNAE8pevndfOgFn3eQFhkZ8Gsn4wIIfQm4uro1xi7ZsiG0bBxklQ3BZWIcEYlPPxwtQRi+fnapyvd8xbhDHI3cht9tuG9H3DbEbQGwyvhcRDCqlE9D44Ow+iov0J/9f6OW2cU3Q65RAAAAAElFTkSuQmCC" class="mb-20">
                <template #title>开发者</template>
                <template #text>可在码市报名项目，赚取收益</template>
            </OptionBox>
            <OptionBox  status="注册需求方" @clickOption="updateOp" headUrl="https://assets.codemart.com/scripts/9d27a944c9f1b5053a3c3aee26c62300.png">
                <template #title>需求方</template>
                <template #text>可在码市发布项目，实现需求</template>
            </OptionBox>
            </div> -->
            <div>
                <TipInput class="mt-15 mb-8" v-model="form.username" placeholder="用户名 (即个性后缀，注册后无法修改)" tipText="请输入用户名"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <!-- <PhoneInput class="mt-15 mb-8" v-model="form.phoneNum" placeholder="手机号" tipText="请输入手机号"
                    :errorImg="require('@/assets/image/icon-error.png')"></PhoneInput> -->
                <TipInput class="mt-15 mb-8" v-model="form.avatarName" placeholder="请输入昵称" tipText="请输入昵称" 
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <TipInput class="mt-15 mb-8" v-model="form.phoneNumber" placeholder="请输入手机号" tipText="请输入手机号"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>
                <TipInput class="mt-15 mb-8" v-model="form.password" placeholder="请输入密码" tipText="请输入密码"  type="password"
                    :errorImg="require('@/assets/image/icon-error.png')"></TipInput>

                <div class="con-check">
                    <input type="checkbox">
                    我同意遵守
                    <nuxt-link to="" class="link-style">
                    《码市用户服务协议》
                    </nuxt-link>
                </div>

                    <SubmitButton class="mt-15" @btnClick="register">注册</SubmitButton>
            </div>
            </div>
        </div>
        <FootInfo theme="white" class="position-bottom"></FootInfo>
    </div>
</template>
<script>
import {registerApi} from '@/api/api.js'
export default {
    data() {
        return {
            form:{
            username: "",
            avatarName:'',
            phoneNumber: "",
            password: "",
            }
        };
    },
    methods:{
        updateOp(status){
            console.log(status);
            this.userStatus=status;
            console.log(this.userStatus);
        },
        register(){
            registerApi(this.form).then(res=>{
                console.log(1);
                console.log(res);
                if(res.data.status===1){
                    this.$message.success({
                     message: '注册成功,'+res.data.msg,
                })
                }else{
                    this.$message.warning({
                     message: '注册失败,'+res.data.msg,
                })
                }
                
            }).catch(err=>{
                console.log(err);
                console.log(88448);
                this.$message.warning({
                     message: '注册失败',
                })
            })
        }
    },
    computed:{
        useStatus(){
            return this.userStatus?this.userStatus:'选择身份'
        }
    }
}
</script>
<style scoped>
.position-bottom{
    position: absolute;
    bottom: 0;
}
.registe-page{
    
    position: relative;
    min-width: 320px;
    min-height: 650px;
    height: 100vh;
}
.form-wrap {
    width: 322px;
    margin: auto;
}
.container{
    position: relative;
    width: 100%;
}
.con-title {
    font-size: 21px;
    padding: 14px 0;
    text-align: center;
    color: black;
}
.con-check{
    font-size: 14px;
    color: #727F8F;
}
.link-style{
color: #4289DC;
}
@media screen and (max-width: 480px) {
    .form-wrap {
        width: 100%;
    }
}
</style>