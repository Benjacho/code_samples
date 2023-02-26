#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <algorithm>
#include <cstdlib>

using namespace std;

void separate(std::string const &str, const char delim,
              std::vector<std::string> &out)
{
    std::stringstream ss(str);

    std::string s;
    while (std::getline(ss, s, delim))
    {
        out.push_back(s);
    }
}

int main()
{
    string input;
    std::getline(std::cin, input);
    const char separator = ' ';

    std::vector<std::string> separated;
    separate(input, separator, separated);

    int gatoA = stoi(separated.at(0));
    int gatoB = stoi(separated.at(1));
    int ratonC = stoi(separated.at(2));

    const int diferenciaGatoA = abs(ratonC - gatoA);
    const int diferenciaGatoB = abs(ratonC - gatoB);

    if (diferenciaGatoB == diferenciaGatoA)
    {
        cout << "Raton C";
    }
    else if (diferenciaGatoA > diferenciaGatoB)
    {
        cout << "Gato B";
    }
    else
    {
        cout << "Gato A";
    }

    cout << "HELO";
    cout << "ANOTHER HELO";

    return 0;
}
