function AboutPage() {
    return (
        // TSX는 html보다 엄격해서 br태그도 닫아줘야한다. 또한, 컴포넌트는 여러개의 TSX태그를 반환할 수 없어서 <div>나 <>같이 공유되는 부모로 감싸야한다
        <>
            <h1>About</h1>
            <p>Hello there.<br/>How Do you do?</p>
        </>
    );
}
