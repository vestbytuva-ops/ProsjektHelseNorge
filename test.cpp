#include <iostream>

int main ()
{
 int file_size=0;
 int counter = 0

 double sales = 9.99;

 std::cout << file_size;
 return 0;
}

#include <iostream>

using namespace std;

int main(){
    int a = 1;
    int b = 2;
    int temp = a;
    a=b;
    b=temp;

    std::cout << a;

    return 0;

}

int main (){
    const double pi = 3.14;
    pi=0;
    return 0;
}

int main(){
    int file_size; // Snake Case
    int FileSize; //Pascal Case
    int filesSize; // Camel Case
    int iFileSize; //Hungarian Notation

    return 0;
}


int main(){
    int x=10;
    int y=3;
    int z=x+y;
    std::cout <<z;
    return 0;
}

int main(){
    int x=10;
    int y=x++; // x=11, y=10
    int z= ++x; // x=11, z=11 
    std::cout << x;
    return 0;
}

int main(){
    double x=(1+2)*3;
    std::cout << x;
    return 0;
}

int main(){
    double x=10;
    double y=5;
    double z = (x + 1) / (3 * y)
    std::cout<<z;
    return 0;

}

int main(){
    int x=10;
    std::cout<< "x ="
    std::cout << x;
    return 0;
}


#include <iostream>

using namespace std;

int main(){
    int x=10;
    int y=20;
    cout <<"x=" << x;  endl
              <<"y" <<y;
    return 0;

}

#include <iostream>

using namespace std;

int main(){
    double sales = 95000;
    cout << "Sales: $" <<  sales << endl;

    const double stateTaxRate: .04;
    double stateTax= sales*stateTaxRate;
    cout << "State Tax: $" << stateTax <<endl;

     const double countyTaxRate: .02;
    double countyTax= sales*countyTaxRate;
    cout << "County Tax: $" << countyTax <<endl;

    double totalTax = stateTax + countyTax;
    cout << "Total Tax: $" << totalTax;



    return 0;

}

#include <iostream>

using namespace std;

int main(){
    cout << "Enter a values for x and y";
    double x;
    double y;

    cin >> x;
    cin >> y;
    cout << x+y;
    return 0;
}


#include <iostream>

using namespace std;

int main(){
    cout << "Enter a values for x and y";
    double x;
    double y;

    cin >> x >> y;
    cout << x+y;
    return 0;
}

#include <iostream>

using namespace std;

int main(){
    cout << "Enter the temperatur in fahrenheit";
    int fahrenheit;

    cin >> fahrenheit;
    double celsius = (fahrenheit - 32) / 1.8;
    cout << celsius;
    return 0;
}

#include <iostream>
#include <cmath>

using namespace std;

int main(){
    double result = pow(2,3);
    cout << result;
    
    return 0;

}


#include <iostream>

using namespace std;

int main(){
    cout << "What is the radius of the cirlce?";
    double radius;
    cin >> radius;
    const double pi= 3.14;
    double area = pi* pow(radius,2);
    cout << area;

    return 0
}

// FUNDEMENTAL DATA TYPES

#include <iostream>

using namespace std;

int main(){
    double price=99.99;
    float interstRate=3.67f;
    long fileSize=90000L;
    char letter='a';
    auto isValid= false;

    return 0;
}



#include <iostream>

using namespace std;

int main(){
    int number {1.2};
    cout << number;
    return 0;
}

 
#include <iostream>

using namespace std;

int main(){
    int number = 0;
    cout << number;

    return 0;
}

#include <iostream>

using namespace std;

int main(){
    int number = 1'000'000;
    short another {number};
    cout << another;


    return 0;
}

#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;
int main (){
    srand(time(0));
    int number = rand() % 10;
    cout << number;
    return 0;
}

 
#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;
int main (){
    const short minValue=1;
    const short maxValue=6
    srand(time(0));
    short first = (rand() % (maxValue - minValue + 1));
    short second = (rand() % (maxValue - minValue + 1));

    cout << first << "," << second;

    return 0;
}

 
 