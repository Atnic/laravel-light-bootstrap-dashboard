@extends('layouts.app')

@section('content-title')
<span class="text-warning">403 Forbidden</span>
@endsection

@section('content')
<div class="row">
  <div class="col-md-8 offset-md-2">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Oops! {{ class_basename($exception->getPrevious() ? : $exception) }}</h4>
      </div>
      @if($exception->getMessage())
      <div class="card-body">
        {{ $exception->getPrevious() ? $exception->getPrevious()->getMessage() : $exception->getMessage() }}
      </div>
      @endif
    </div>
  </div>
</div>
@endsection
