//We have 4 logical operators with us. $and , $or, $nor and $not
// syntax: { operator:  [{condition1},{condition2},…] }


// $and operator
// performs a logical AND operation on an array of two or more expressions (e.g. <expression1>, <expression2>, etc.) and selects the documents that satisfy all the expressions in the array. The $and operator uses short-circuit evaluation. If the first expression (e.g. <expression1>) evaluates to false, MongoDB will not evaluate the remaining expressions.


// $or operator
// performs a logical OR operation on an array of two or more expressions (e.g. <expression1>, <expression2>, etc.) and selects the documents that satisfy at least one of the expressions. The $or operator uses short-circuit evaluation. If the first expression (e.g. <expression1>) evaluates to true, MongoDB will not evaluate the remaining expressions.

// $nor operator
// performs a logical NOR operation on an array of one or more query expression and selects the documents that fail all the query expressions in the array. The $nor has the following syntax:

// $not operator
// performs a logical NOT operation on the specified <operator-expression> and selects the documents that do not match the <operator-expression>. This includes documents that do not contain the field.