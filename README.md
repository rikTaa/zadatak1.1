# Zadatak 1 Version 1.1

## Opis zadatka
Potrebno je napraviti funkciju koja ce izračunati sumu 8 brojeva koji
okružuju broj koji je proslijeđen funkciji. U sumu se ubraja i proslijeđeni
broj.
Ukoliko broj nema 8 brojeva koji ga okružuju, ne ubrajaju se u sumu.
Primjer funkcije: sum(45) -> 405
Brojevi koji okružuju broj 45 su: 34, 35, 36, 44, 46, 54, 55, 56. Suma ovih
brojeva je 360. Na ovu sumu se dodaje broj koji se proslijedio funkciji (45) i
to nam daje rezultat 405.

## Postupak

Namjestio sam da se unesu prvi i drugi niz, s kojima se učitava određeni broj i nakon učitavanja izračunava se suma 8 brojeva oko proslijeđenog broja i on zajedno sa njima.
Ja sam svoj zadatak djelimično uspio uraditi, npr. ako unesemo indexe 1 i 0, dobijamo broj 11 i njegovih 8 brojeva koji su 0, 12, 1, 0, 2, 21, 22, 0 i suma bi bila 69.
Program za sad ispravno radi ali kada bi npr. unijeli nizve za brojeve koje se nalaze na prvom ili zadnjem redu, program ne bi radio i dobili bi error u konzoli.
Pokušavao sam na više načina da riješim problem, no bez uspijeha.
Predpostavljam da je problem kada se treba izračunati top i bot broj i ako izađu van matrice error se pojavi.
