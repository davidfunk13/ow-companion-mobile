interface SQLResponse<T> {
    rows: { _array: T[]}
}

export default SQLResponse; 
