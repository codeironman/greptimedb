searchState.loadedDescShard("datatypes", 0, "Apply the macro rules to all primitive types.\nSome helper macros for datatypes, copied from databend.\nMatch the logical type and apply <code>$body</code> to all primitive …\nData type abstraction.\nConvert this type as arrow::datatypes::DataType.\nConvert this type as arrow::datatypes::DataType.\nTry to cast data type as a <code>DurationType</code>.\nTry to cast the type as a <code>ListType</code>.\nTry to cast data type as a <code>TimeType</code>.\nTry to cast data type as a <code>TimestampType</code>.\nChecks if the data type can cast to another data type.\nCreates a mutable vector with given <code>capacity</code> of this type.\nCreates a mutable vector with given <code>capacity</code> of this type.\nReturns the default value of this type.\nReturns the default value of this type.\nCreates a [Duration(DurationMicrosecondType)] datatype.\nCreates a [Duration(DurationMillisecondType)] datatype.\nCreates a [Duration(DurationNanosecondType)] datatype.\nCreates a [Duration(DurationSecondType)] datatype.\nReturns the argument unchanged.\nConverts from arrow timestamp unit to\nConvert arrow data type to ConcreteDataType.\nCreates a [Interval(IntervalDayTimeType)] datatype.\nCreates a [Interval(IntervalMonthDayNanoType)] datatype.\nCreates a [Interval(IntervalYearMonthType)] datatype.\nCalls <code>U::from(self)</code>.\nReturns id of the Logical data type.\nReturns id of the Logical data type.\nName of this data type.\nName of this data type.\nTry to get numeric precision, returns <code>None</code> if it’s not …\nTry to get numeric scale, returns <code>None</code> if it’s float or …\nReturns the time data type with <code>TimeUnit</code>.\nCreates a [Time(TimeMicrosecond)] datatype.\nCreates a [Time(TimeMillisecondType)] datatype.\nCreates a [Time(TimeNanosecond)] datatype.\nCreates a [Time(TimeSecondType)] datatype.\nCasts the value to specific DataType. Return None if cast …\nCasts the value to specific DataType. Return None if cast …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSNAFU context selector for the <code>Error::ArrowCompute</code> variant\nSNAFU context selector for the <code>Error::BadArrayAccess</code> …\nSNAFU context selector for the <code>Error::CastTimeType</code> variant\nSNAFU context selector for the <code>Error::CastType</code> variant\nSNAFU context selector for the <code>Error::Conversion</code> variant\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::DefaultValueType</code> …\nSNAFU context selector for the <code>Error::Deserialize</code> variant\nSNAFU context selector for the <code>Error::DuplicateColumn</code> …\nSNAFU context selector for the <code>Error::DuplicateMeta</code> variant\nContains the error value\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::InvalidTimestampIndex</code>…\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::NullDefault</code> variant\nContains the success value\nSNAFU context selector for the <code>Error::ParseSchemaVersion</code> …\nSNAFU context selector for the <code>Error::ProjectArrowSchema</code> …\nSNAFU context selector for the <code>Error::Serialize</code> variant\nSNAFU context selector for the <code>Error::ToScalarValue</code> variant\nSNAFU context selector for the <code>Error::TryFromValue</code> variant\nSNAFU context selector for the <code>Error::UnknownVector</code> variant\nSNAFU context selector for the <code>Error::UnsupportedArrowType</code> …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::UnsupportedOperation</code> …\nSNAFU context selector for the <code>Error::ValueExceedsPrecision</code>…\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBuilder type to build this vector.\nIterator type of this vector.\nThe reference item of this vector.\nOwned scalar value e.g. primitive types, bool, <code>Vec&lt;u8&gt;</code> …\nThe corresponding <code>Scalar</code> type.\nA sub trait of Vector to add scalar operation support.\nA trait over all vector builders.\nGet a reference of the current value.\nBuild a new vector and reset <code>self</code>.\nBuild a new vector without resetting <code>self</code>.\nReturns the reference to an element at given position.\nReturns iterator of current vector.\nPush a value into the builder.\nConvert the reference into an owned value.\nUpcast GAT type’s lifetime.\nCreate a new builder with initial <code>capacity</code>.\nSchema of a column, used as an immutable struct.\nKey used to store fulltext options in arrow field’s …\nFulltext analyzer.\nFulltext options for a column.\nInitial version of the schema.\nStruct used to serialize and deserialize <code>Schema</code>.\nA common schema, should be immutable.\nKey used to store whether the column is time index in …\nKey used to store version number of the schema in metadata.\nAdd key value pair to metadata.\nThe fulltext analyzer to use.\nWhether the fulltext index is case-sensitive.\nRetrieve the column’s name by index\nSchema of columns.\nWhether the fulltext index is enabled.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a schema from a vector of ColumnSchema.\nReturns index of the timestamp key column.\nIndex of the timestamp column.\nIndex of the timestamp key column.\nTry to Create a schema from a vector of ColumnSchema.\nGenerate a new projected schema\nSchema version.\nVersion of the schema.\nSchema of a column, used as an immutable struct.\nKey used to store default constraint in arrow field’s …\nKey used to store fulltext options in arrow field’s …\nFulltext analyzer.\nFulltext options for a column.\nKey used to store whether the column is time index in …\nThe fulltext analyzer to use.\nWhether the fulltext index is case-sensitive.\nRetrieve the column comment\nCreates a default value for this column.\nCreates a vector with default value for this column.\nCreates a vector for padding.\nWhether the fulltext index is enabled.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nRetrieves the fulltext options for the column.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the nullability to <code>true</code> of the column. Similar to …\nSet the <code>is_time_index</code> to <code>true</code> of the column. Similar to …\nSet default constraint.\nCreates a new <code>ColumnSchema</code> with given metadata.\nSet the nullablity to <code>true</code> of the column. Similar to …\nColumn’s default constraint.\nCreate a default value for given <code>data_type</code>.\nCreate a vector that contains <code>num_rows</code> default values for …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns true if this constraint might creates NULL.\nReturns a default null constraint.\nCheck whether the constraint is valid for columns with …\nStruct used to serialize and deserialize <code>Schema</code>.\nSchema of columns.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new RawSchema from specific <code>column_schemas</code>.\nIndex of the timestamp column.\nSchema version.\nSerialize a column of value with given type to JSON value\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDate representing the elapsed time since UNIX epoch …\nDatetime representing the elapsed time since UNIX epoch …\nA 64-bit duration representing the elapsed time in either …\nA 64-bit interval representing the elapsed time in days …\nA 128-bit interval representing the elapsed time in …\nA 32-bit interval representing the elapsed time in months.\nUnique identifier for logical data type.\nA 64-bit time representing the elapsed time since midnight …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nArrow primitive type of this logical type.\nData type for <code>DateTime</code>.\nData type for Date (YYYY-MM-DD).\nDecimal type with precision and scale information.\nUsed to represent the Dictionary datatype.\nThe “calendar” interval is a type of time interval …\nLargest type this primitive type can cast to.\nUsed to represent the List datatype.\nTrait bridging the logical primitive type with …\nLogical primitive type that this wrapper type belongs to.\nThe underlying native type.\nNative (physical) type of this logical type.\nData types that can be used as arrow’s native type.\nA new type for WrapperType, complement the <code>Ord</code> feature for …\nWrapper type that the vector returns.\nRepresents the wrapper type that wraps a native type using …\nConstruct the data type struct.\nCast value ref to the primitive type.\nDynamic cast the vector to the concrete vector type.\nConvert native type into this wrapper type.\nConvert this wrapper type into native type.\nThe type of List’s item.\nThe type of Dictionary key.\nTimeType represents the elapsed time since midnight in the …\nReturn the name of the type.\nThe type of Dictionary value.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCast options for cast functions.\nReturn true if the src_value can be casted to dest_type, …\nUsed to cast the value to dest ConcreteDataType …\nCast the value to dest_type with CastOption.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\ndecide how to handle cast failures, either return NULL …\nData type for Date (YYYY-MM-DD).\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nData type for <code>DateTime</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nDecimal type with precision and scale information.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nUsed to represent the Dictionary datatype.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the key data type.\nThe type of Dictionary key.\nCreate a new <code>DictionaryType</code> whose item’s data type is …\nReturns the value data type.\nThe type of Dictionary value.\nConvert this type as arrow::datatypes::DataType.\nCreates a mutable vector with given <code>capacity</code> of this type.\nReturns the default value of this type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates time type from <code>TimeUnit</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns id of the Logical data type.\nName of this data type.\nCasts the value to specific DataType. Return None if cast …\nReturns the <code>TimeUnit</code> of this type.\nThe “calendar” interval is a type of time interval …\nConvert this type as arrow::datatypes::DataType.\nCreates a mutable vector with given <code>capacity</code> of this type.\nReturns the default value of this type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns id of the Logical data type.\nName of this data type.\nCasts the value to specific DataType. Return None if cast …\nReturns the unit of the interval.\nUsed to represent the List datatype.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the item data type.\nThe type of List’s item.\nCreate a new <code>ListType</code> whose item’s data type is <code>item_type</code>…\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nArrow primitive type of this logical type.\nLargest type this primitive type can cast to.\nTrait bridging the logical primitive type with …\nLogical primitive type that this wrapper type belongs to.\nThe underlying native type.\nNative (physical) type of this logical type.\nData types that can be used as arrow’s native type.\nA new type for WrapperType, complement the <code>Ord</code> feature for …\nWrapper type that the vector returns.\nRepresents the wrapper type that wraps a native type using …\nConstruct the data type struct.\nCast value ref to the primitive type.\nDynamic cast the vector to the concrete vector type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert native type into this wrapper type.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert this wrapper type into native type.\nReturn the name of the type.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConvert this type as arrow::datatypes::DataType.\nCreates a mutable vector with given <code>capacity</code> of this type.\nReturns the default value of this type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates time type from <code>TimeUnit</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns id of the Logical data type.\nName of this data type.\nReturns the time type’s precision.\nCasts the value to specific DataType. Return None if cast …\nReturns the time type’s <code>TimeUnit</code>.\nConvert this type as arrow::datatypes::DataType.\nCreates a mutable vector with given <code>capacity</code> of this type.\nReturns the default value of this type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns id of the Logical data type.\nName of this data type.\nCasts the value to specific DataType. Return None if cast …\nConvert fractional timestamp precision to timestamp types. …\nReturns the <code>TimeUnit</code> of this type.\nDictionary value.\nList value.\nReference to a ListValue.\nA wrapper around floats providing implementations of <code>Eq</code>, …\nValue holds a single arbitrary value of any DataType.\nReference to Value.\nCast itself to binary slice.\nCast itself to boolean.\nCast Value to Date. Return None if value is not a valid …\nCast itself to Date.\nCast Value to DateTime. Return None if value is not a …\nCast itself to DateTime.\nCast itself to Decimal128.\nCast Value to Interval. Return None if value is not a …\nCast itself to Interval.\nCast itself to ListValue.\nCast itself to ListValueRef.\nCast Value to utf8 String. Return None if value is not a …\nCast itself to string slice.\nCast Value to Time. Return None if value is not a valid …\nCast itself to Time.\nCast Value to timestamp. Return None if value is not a …\nCast itself to Timestamp.\nCast Value to u64. Return None if value is not a valid …\nCast itself to ValueRef.\nReturns the size of the underlying data in bytes, The size …\nReturns data type of the value.\nReturns data type of the value.\nReturns the inner element’s data type.\nInner values datatype, to distinguish empty lists of …\nCast the 64-bit duration into the arrow ScalarValue with …\nuse ‘the first item size’ * ‘length of items’ to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert a &amp;str to <code>OrderedFloat</code>. Returns an error if the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the value out.\nReturns true if this is a null value.\nReturns true if this is null.\nInner values datatypes\nReturns the logical type of the value.\nReturns the maximum number of digits a nonnegative …\nReturns the maximum number of digits a negative …\nConvert ScalarValue to Interval.\nConvert <code>ScalarValue</code> to <code>Timestamp</code>. If it’s …\nCast the 64-bit elapsed time into the arrow ScalarValue by …\nConvert self to Value. This method would clone the …\nApply <code>-</code> unary op if possible\nConvert the value into <code>ScalarValue</code> according to the …\nVector of binary strings.\nVector of boolean.\nVector of <code>DateTime</code>\nBuilder for <code>DateTimeVector</code>.\nDecimal128Vector is a vector keep i128 values with …\nHelper functions for <code>Vector</code>.\nVector of Lists, basically backed by Arrow’s <code>ListArray</code>.\nListVector builder.\nMutable vector that could be used to build an immutable …\nA vector where all elements are nulls.\nVector for primitive data types.\nBuilder to build a primitive vector.\nVector of strings.\nValidity of a vector.\nVector of data values.\nReturns the vector as Any so that it can be downcast to a …\nConvert to Any, to enable dynamic casting.\nConvert to mutable Any, to enable dynamic casting.\nReturns the data type of the vector.\nReturns the data type of the vector.\nExtend this mutable vector by slice of <code>vector</code>.\nReturns the clone of value at <code>index</code>.\nReturns the reference of value at <code>index</code>.\nVector helper functions, inspired by databend Series mod\nHelper to define …\nReturns true when it’s a ConstantColumn\nReturns whether the vector is empty.\nReturns whether the vector is empty.\nReturns whether row is null.\nThe datatype of the items in the list.\nReturns number of elements in the vector.\nReturns the length of the vector.\nReturns the memory size of vector.\nThe number of null slots on this <code>Vector</code>.\nIf the vector only contains NULL.\nPush null to this mutable vector.\nPush nulls to this mutable vector.\nPush value ref to this mutable vector.\nSlices the <code>Vector</code>, returning a new <code>VectorRef</code>.\nConvert this vector to a new arrow ArrayRef.\nConvert this vector to a new boxed arrow Array.\nConvert <code>self</code> to an (immutable) VectorRef and reset <code>self</code>.\nConvert <code>self</code> to an (immutable) VectorRef and without …\nReturns the clone of value at <code>index</code> or error if <code>index</code> is …\nTry to push value ref to this mutable vector.\nReturns the validity of the Array.\nVector of binary strings.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nVector of boolean.\nGet the inner boolean array.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the constant value.\nCalls <code>U::from(self)</code>.\nCreate a new ConstantVector.\nVector of <code>DateTime</code>\nBuilder for <code>DateTimeVector</code>.\nDecimal128Vector is a vector keep i128 values with …\nReturn decimal128 vector inner array\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct Vector from i128 values slice\nConstruct Vector from i128 values\nConstruct Vector from Wrapper(Decimal128) values slice\nGet decimal128 Value from array by index.\nGet decimal128 value from vector by offset and length.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNew a Decimal128Vector from Arrow Decimal128Array\nValues that exceed the precision bounds will be casted to …\nReturn decimal128 vector precision\nReturn decimal128 vector scale\nValidate decimal precision, if precision is invalid, …\nReturn decimal value as string\nChange the precision and scale of the …\nReturns a Decimal vector with the same data as self, with …\nReturns a Decimal vector with the same data as self, with …\nHelper functions for <code>Vector</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nPerform SQL like operation on <code>names</code> and a scalar <code>s</code>.\nGet a pointer to the underlying data of this vectors. Can …\nTry to cast an arrow scalar value into vector\nTry to cast an arrow array into vector\nTry to cast slice of <code>arrays</code> to vectors.\nVector of Lists, basically backed by Arrow’s <code>ListArray</code>.\nListVector builder.\nBuilder for creating the null bit buffer. This builder …\nAppends a boolean value into the builder.\nAppends a <code>true</code> into the builder to indicate that this item …\nAppends a <code>false</code> into the builder to indicate that this …\nBuilds the null buffer and resets the builder. Returns <code>None</code>…\nBuilds the NullBuffer without resetting the builder.\nFinish the current variable-length list vector slot.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe datatype of the items in the list.\nStore the length of the buffer before materializing.\nCreates a new empty builder. <code>capacity</code> is the number of …\nIterate elements as VectorRef.\nCreates a new <code>ListVectorBuilder</code>. <code>item_type</code> is the data …\nA vector where all elements are nulls.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>NullVector</code> with <code>n</code> elements.\nVector compute operations.\nCast vector to the provided data type and return a new …\nFilters the vector, returns elements matching the <code>filter</code> …\nMark <code>i-th</code> bit of <code>selected</code> to <code>true</code> if the <code>i-th</code> element of …\nCopies each element according <code>offsets</code> parameter.\nTake elements from the vector by the given indices.\nVector for primitive data types.\nBuilder to build a primitive vector.\nGet the inner arrow array.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSlice the vector, returning a new vector.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nVector of strings.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAll slots are null.\nAll slots are valid.\nWhether the array slot is valid or not (null).\nValidity of a vector.\nReturns <code>Validity</code> that all elements are null.\nReturns <code>Validity</code> that all elements are valid.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a <code>Validity</code> from <code>ArrayData</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if all bits are null.\nReturns true if all bits are valid.\nReturns whether <code>i-th</code> bit is set.\nThe number of null slots.")